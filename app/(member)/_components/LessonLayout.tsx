import Link from "next/link";

type Lesson = {
    id: string;
    title: string;
}
type Props = {
    children: React.ReactNode;
    lessons: Lesson[];
    currentLessonId?: string;
}

function LessonLayout( { children, lessons, currentLessonId } : Props ) {


  return (
    <div>
        <div className="grid grid-cols-2 gap-[2.5rem]">
            {children}

            <div className="sidebar">
                <h3 style={{ color: "var(--color-accent)", fontWeight: "600"}}>レッスン一覧</h3>
                {lessons.map((content) => (
                    <Link key={content.id}
                    href={`/lessons/${content.id}`}
                    className={`chapter-item completed ${ content.id === currentLessonId && "bg-[var(--color-background)]" }`}>
                    {content.title}
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LessonLayout
