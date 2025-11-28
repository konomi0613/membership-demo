export type Progress = {
  id: string
  user_id: string
  lesson_id: string
  course_id: string
  completed_at: string
  created_at: string
  updated_at: string
}

export type CourseProgressData = {
  completedLessonIds: Set<string>
  completedCount: number
  totalLessons: number
  percentage: number
  isCompleted: boolean
  lessons: Array<{
    id: string
    title: string
    // 他のレッスンフィールド
  }>
}