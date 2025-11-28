import { createClient } from './server'
import { getCourseDetail, getLessonsList } from '../microcms'

// レッスンを完了にする
export async function completeLesson(lessonId: string, courseId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) throw new Error('ログインしてください')
  
  const { data, error } = await supabase
    .from('progress')
    .upsert({
      user_id: user.id,
      lesson_id: lessonId,
      course_id: courseId,
    }, {
      onConflict: 'user_id,lesson_id'
    })
    .select()
    .single()
  
  if (error) throw error
  return data
}

// コースの完全な進捗データを取得（1回のクエリ）
export async function getCompleteCourseProgressData(courseId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    // ログインしていない場合
    const lessons = await getLessonsList({
      filters: `course[equals]${courseId}`
    })
    
    return {
      completedLessonIds: new Set<string>(),
      completedCount: 0,
      totalLessons: lessons.totalCount,
      percentage: 0,
      isCompleted: false,
      lessons: lessons.contents
    }
  }
  
  // 並列でデータ取得
  const [{ data: progress }, lessons] = await Promise.all([
    supabase
      .from('progress')
      .select('lesson_id')
      .eq('user_id', user.id)
      .eq('course_id', courseId),
    getLessonsList({
      filters: `course[equals]${courseId}`
    })
  ])
  
  const completedLessonIds = new Set(progress?.map(p => p.lesson_id) || [])
  const completedCount = completedLessonIds.size
  const totalLessons = lessons.totalCount
  const percentage = totalLessons > 0
    ? Math.round((completedCount / totalLessons) * 100)
    : 0
  
  return {
    completedLessonIds,
    completedCount,
    totalLessons,
    percentage,
    isCompleted: completedCount === totalLessons,
    lessons: lessons.contents
  }
}

// 受講中のコースを取得
export async function getInProgressCourses() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return []
  
  const { data: progress } = await supabase
    .from('progress')
    .select('course_id')
  
  if (!progress || progress.length === 0) return []
  
  const uniqueCourseIds = [...new Set(progress.map(p => p.course_id))]
  
  const coursesWithProgress = await Promise.all(
    uniqueCourseIds.map(async (courseId) => {
      const [course, progressData] = await Promise.all([
        getCourseDetail(courseId),
        getCompleteCourseProgressData(courseId)
      ])
      
      return {
        ...course,
        progress: {
          completedCount: progressData.completedCount,
          totalLessons: progressData.totalLessons,
          percentage: progressData.percentage,
          isCompleted: progressData.isCompleted
        }
      }
    })
  )
  
  return coursesWithProgress.filter(c => !c.progress.isCompleted)
}

// 完了したコースを取得
export async function getCompletedCourses() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return []
  
  const { data: progress } = await supabase
    .from('progress')
    .select('course_id')
  
  if (!progress || progress.length === 0) return []
  
  const uniqueCourseIds = [...new Set(progress.map(p => p.course_id))]
  
  const coursesWithProgress = await Promise.all(
    uniqueCourseIds.map(async (courseId) => {
      const [course, progressData] = await Promise.all([
        getCourseDetail(courseId),
        getCompleteCourseProgressData(courseId)
      ])
      
      return {
        ...course,
        progress: {
          completedCount: progressData.completedCount,
          totalLessons: progressData.totalLessons,
          percentage: progressData.percentage,
          isCompleted: progressData.isCompleted
        }
      }
    })
  )
  
  return coursesWithProgress.filter(c => c.progress.isCompleted)
}