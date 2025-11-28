"use server"

import { createClient } from "@/app/_libs/supabase/server"
import { revalidatePath } from "next/cache"

export type ProgressResult = {
  status: "success" | "error" | ""
  message: string
}

// レッスンを完了にする
export async function completeLesson(
  lessonId: string,
  courseId: string
): Promise<ProgressResult> {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return {
      status: "error",
      message: "ログインしてください"
    }
  }
  
  const { error } = await supabase
    .from('progress')
    .upsert({
      user_id: user.id,
      lesson_id: lessonId,
      course_id: courseId,
    }, {
      onConflict: 'user_id,lesson_id'
    })
  
  if (error) {
    return {
      status: "error",
      message: `完了エラー: ${error.message}`
    }
  }
  
  revalidatePath("/", "layout")
  
  return {
    status: "success",
    message: "レッスンを完了しました"
  }
}