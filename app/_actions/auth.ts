"use server"

import { createClient } from "@/app/_libs/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export type AuthResult = {
  status: "success" | "error" | ""
  message: string
  formData?: Record<string, string>
}

// ログイン
export async function login(
  _prevState: AuthResult,
  formData: FormData
): Promise<AuthResult> {
  const supabase = await createClient()

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

    // バリデーション
  if (!data.email || !data.password) {
    return {
      status: "error",
      message: "メールアドレスとパスワードを入力してください"
    }
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return {
      status: "error",
      message:` "メールアドレスまたはパスワードが正しくありません："  ${error}`,
    }
  }

  revalidatePath("/", "layout")
  redirect("/mypage")
}

// 会員登録
export async function signup(
  _prevState: AuthResult,
  formData: FormData
): Promise<AuthResult> {
  const supabase = await createClient()

  // フォームデータの取得
  const name = formData.get("signup-name") as string
  const email = formData.get("signup-email") as string
  const password = formData.get("signup-password") as string
  const passwordConfirm = formData.get("signup-password-confirm") as string
  const privacyAgreement = formData.get("terms-agreement") as string 

  // 1. 必須チェック
  if (!name || name.trim() === "") {
    return {
      status: "error",
      message: "お名前を入力してください",
      formData: Object.fromEntries(formData) as Record<string, string>
    }
  }

  if (!email || email.trim() === "") {
    return {
      status: "error",
      message: "メールアドレスを入力してください",
      formData: Object.fromEntries(formData) as Record<string, string>
    }
  }

  if (!password) {
    return {
      status: "error",
      message: "パスワードを入力してください",
      formData: Object.fromEntries(formData) as Record<string, string>
    }
  }

  // 2. メールアドレス形式チェック
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "有効なメールアドレスを入力してください",
      formData: Object.fromEntries(formData) as Record<string, string>
    }
  }

  // 3. パスワードの長さチェック
  if (password.length < 8) {
    return {
      status: "error",
      message: "パスワードは8文字以上で入力してください",
      formData: Object.fromEntries(formData) as Record<string, string>
    }
  }

  // 4. パスワード確認の一致チェック
  if (password !== passwordConfirm) {
    return {
      status: "error",
      message: "パスワードが一致しません",
      formData: Object.fromEntries(formData) as Record<string, string>
    }
  }

  // 5. プライバシーポリシー同意チェック
  if (!privacyAgreement) {
    return {
      status: "error",
      message: "プライバシーポリシーに同意してください",
      formData: Object.fromEntries(formData) as Record<string, string>
    }
  }

  // 6. 会員登録処理
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback` 
    },
  })

  if (error) {
    return {
      status: "error",
      message: `登録エラー: ${error.message}`,
    }
  }

  revalidatePath("/", "layout")

  return {
    status: "success",
    message: "登録が完了しました"
  }
}

// ログアウト
export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath("/", "layout")
  redirect("/")
}