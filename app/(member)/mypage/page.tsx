// ログイン直後のホーム画面
// 最近の講座、お知らせ、進捗サマリーなど

import { getNewsList } from '@/app/_libs/microcms';
import { MYPAGE_NEWS_LIMIT } from '@/app/_constants';
import NewsCard from '../_components/NewsCard';
import Link from 'next/link';
import { createClient } from '@/app/_libs/supabase/server';
import { getCompletedCourses, getInProgressCourses } from '@/app/_libs/supabase/progress';

async function MyPage() {
    const [newsList, inProgressCourses, completedCourses] = await Promise.all([
    getNewsList({ limit: MYPAGE_NEWS_LIMIT, orders: '-publishedAt' }),
    getInProgressCourses(),
    getCompletedCourses()
  ])

  // プログレスリングのstrokeDashoffsetを計算
  const calculateStrokeDashoffset = (percentage: number) => {
    const circumference = 125.66
    return circumference * (1 - percentage / 100)
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const name = user?.user_metadata?.name
  

  return (
    < >
       <div className="card mt-[var(--spacing-lg)]">
       <h2 className="text-[var(--color-main)] mb-[var(--spacing-xs)]">{name}さん、ようこそ</h2>
       <p className="text-[var(--color-medium-gray)]">こんにちは！学習は継続が大事。今日も頑張りましょう。</p>
      </div>
      <h2 className="page-heading-title text-xs">受講中の講座</h2>
      <div className="grid-2 mb-lg">
        {inProgressCourses.map(course => (
        <div key={course.id} className="card">
          <div className="flex-between">
          <div>
            <h3 className="course-title">{course.title}</h3>
            <p>レッスン {course.progress.completedCount} / {course.progress.totalLessons}</p>
          </div>
          <div className="progress-ring">
                  <svg width="50" height="50">
                    <circle 
                      className="bg" 
                      cx="25" 
                      cy="25" 
                      r="20" 
                      strokeDasharray="125.66" 
                      strokeDashoffset="0"
                    />
                    <circle 
                      className="progress" 
                      cx="25" 
                      cy="25" 
                      r="20" 
                      strokeDasharray="125.66" 
                      strokeDashoffset={calculateStrokeDashoffset(course.progress.percentage)}
                    />
                  </svg>
                  <div className="progress-text">
                    {course.progress.percentage}%
                  </div>
                </div>
          </div><a href={`/courses/${course.id}`} className="btn btn-primary mt-[var(--spacing-sm)]" >続きを見る</a>
        </div>
        ))}

      </div>

      <h2 className="page-heading-title text-xs">完了した講座</h2>
      <div className="grid-2 mb-lg">
        {completedCourses.map(course => (
        <div key={course.id} className="card">
          <div className="flex-between">
          <div>
            <h3 className="course-title">{course.title}</h3>
            <p>レッスン {course.progress.completedCount} / {course.progress.totalLessons}</p>
          </div>
          <div className="progress-ring">
                  <svg width="50" height="50">
                    <circle 
                      className="bg" 
                      cx="25" 
                      cy="25" 
                      r="20" 
                      strokeDasharray="125.66" 
                      strokeDashoffset="0"
                    />
                    <circle 
                      className="progress" 
                      cx="25" 
                      cy="25" 
                      r="20" 
                      strokeDasharray="125.66" 
                      strokeDashoffset={calculateStrokeDashoffset(course.progress.percentage)}
                    />
                  </svg>
                  <div className="progress-text">
                    {course.progress.percentage}%
                  </div>
                </div>
          </div><a href={`/courses/${course.id}`} className="btn btn-primary mt-[var(--spacing-sm)]" >続きを見る</a>
        </div>
        ))}
      </div>

      <h2 className="page-heading-title">お知らせ</h2>
      <ul>
        { newsList.contents.map(( content ) => 
          <NewsCard key={content.id} news={content} />
        )}
      </ul>
      <Link href="/news" className="btn btn-primary mt-[var(--spacing-sm)]" >続きを見る</Link>
     </>
  )
}

export default MyPage
