"use client"
import { completeLesson } from '@/app/_actions/progress'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
  lessonId: string
  courseId: string
  isCompleted: boolean
  nextLessonId: string
}

function CompleteLessonButton({ lessonId, courseId, isCompleted, nextLessonId }: Props) {
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(isCompleted)
  const [message, setMessage] = useState('')
  
  const handleComplete = async () => {
    setLoading(true)
    const result = await completeLesson(lessonId, courseId)
    
    if (result.status === 'success') {
      setCompleted(true)
    }
    
    setMessage(result.message)
    setLoading(false)
  }
  
  if (completed) {
    return (
        <div className='flex justify-between items-center'>
        {nextLessonId ? (
            <>
                <p className="text-[var(--color-success)]">✓ このレッスンを完了しました</p>
                <Link 
                href={`/lessons/${nextLessonId}`}
                className="btn btn-ghost">次のレッスンに進む</Link>
            </>

        ) : (
              <>
                <div>
                    <p className="text-[var(--color-success)] font-bold">
                    🎉 おめでとうございます！
                    </p>
                    <p className="text-[var(--color-medium-gray)] text-sm">
                    このコースを全て完了しました
                    </p>
                </div>

                <Link href="/courses" className="btn btn-ghost mt-2">
                コース一覧に戻る
                </Link>
            </>
        )}
        </div>
        )    
    }
  
  return (
    <>
      <button 
        onClick={handleComplete}
        disabled={loading}
        className="btn btn-primary"
      >
        {loading ? '処理中...' : 'レッスンを完了する'}
      </button>
      {message && (
        <p className="mt-2 text-[var(--color-success)]">{message}</p>
      )}
    </>
  )
}

export default CompleteLessonButton