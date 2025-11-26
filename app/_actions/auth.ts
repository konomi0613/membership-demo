"use server"

import { createClient } from "@/app/_libs/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export type AuthResult = {
  status: "success" | "error" | ""
  message: string
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

  const data = {
    email: formData.get("signup-email") as string,
    password: formData.get("signup-password") as string,
    options: {
      data: {
        name: formData.get("signup-name") as string,
      },
    },
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return {
      status: "error",
      message: error.message,
    }
  }

  revalidatePath("/", "layout")
  redirect("/mypage")
}

// ログアウト
export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath("/", "layout")
  redirect("/")
}