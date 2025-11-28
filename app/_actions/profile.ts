"use server"

import { createClient } from "@/app/_libs/supabase/server"
import { revalidatePath } from "next/cache"

export type ProfileResult = {
  status: "success" | "error" | ""
  message: string
}

export async function updateProfile(
  _prevState: ProfileResult,
  formData: FormData
): Promise<ProfileResult> {
  const supabase = await createClient()

  // 現在のユーザーを取得
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return {
      status: "error",
      message: "ログインしてください"
    }
  }

  // フォームデータの取得
  const name = formData.get("profile-name") as string

  // バリデーション
  if (!name || name.trim() === "") {
    return {
      status: "error",
      message: "お名前を入力してください"
    }
  }

  if (name.length > 50) {
    return {
      status: "error",
      message: "お名前は50文字以内で入力してください"
    }
  }

  // プロフィール更新
  const { error } = await supabase.auth.updateUser({
    data: {
      name: name.trim()
    }
  })

  if (error) {
    return {
      status: "error",
      message: `更新エラー: ${error.message}`
    }
  }

  revalidatePath("/", "layout")

  return {
    status: "success",
    message: "プロフィールを更新しました"
  }
}


//　パスワード更新
export type PasswordResult = {
  status: "success" | "error" | ""
  message: string
}

export async function updatePassword(
  _prevState: PasswordResult,
  formData: FormData
): Promise<PasswordResult> {
  const supabase = await createClient()

  // 現在のユーザーを取得
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return {
      status: "error",
      message: "ログインしてください"
    }
  }

  // フォームデータの取得
  const currentPassword = formData.get("current-password") as string
  const newPassword = formData.get("new-password") as string
  const confirmPassword = formData.get("confirm-password") as string

  // バリデーション
  if (!currentPassword || !newPassword || !confirmPassword) {
    return {
      status: "error",
      message: "すべての項目を入力してください"
    }
  }

  if (newPassword.length < 8) {
    return {
      status: "error",
      message: "新しいパスワードは8文字以上で入力してください"
    }
  }

  if (newPassword !== confirmPassword) {
    return {
      status: "error",
      message: "新しいパスワードが一致しません"
    }
  }

  if (currentPassword === newPassword) {
    return {
      status: "error",
      message: "新しいパスワードは現在のパスワードと異なるものを設定してください"
    }
  }

  // 現在のパスワードが正しいか確認
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: user.email!,
    password: currentPassword,
  })

  if (signInError) {
    return {
      status: "error",
      message: "現在のパスワードが正しくありません"
    }
  }

  // パスワード更新
  const { error } = await supabase.auth.updateUser({
    password: newPassword
  })

  if (error) {
    return {
      status: "error",
      message: `パスワード変更エラー: ${error.message}`
    }
  }

  return {
    status: "success",
    message: "パスワードを変更しました"
  }
}