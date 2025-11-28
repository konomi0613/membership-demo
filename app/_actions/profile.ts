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