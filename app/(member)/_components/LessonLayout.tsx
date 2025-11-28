import Link from "next/link";

type Lesson = {
    id: string;
    title: string;
}
type Props = {
    children: React.ReactNode;
    lessons: Lesson[];
    currentLessonId?: string;
    completedLessonIds: Set<string>;
}

function LessonLayout( { children, lessons, currentLessonId, completedLessonIds } : Props ) {

  return (
    <div>
        <div className="grid grid-cols-2 gap-[2.5rem]">
            {children}

            <div className="sidebar">
                <h3 style={{ color: "var(--color-accent)", fontWeight: "600"}}>レッスン一覧</h3>
                {lessons.map((content) => {
                    const isCompleted = completedLessonIds.has(content.id)
                    const isCurrent = content.id === currentLessonId

                    return (
                    <Link key={content.id}
                    href={`/lessons/${content.id}`}
                    className={`chapter-item ${isCompleted ? 'completed' : ''} ${ isCurrent && "bg-[var(--color-background)]" }`}>
                    {content.title}
                    </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default LessonLayout
