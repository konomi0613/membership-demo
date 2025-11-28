import { getLessonDetail } from "@/app/_libs/microcms"
import { SlugPageProps } from "@/app/_libs/types";
import styles from "./page.module.scss"
import LessonLayout from "../../_components/LessonLayout";
import CompleteLessonButton from "../_components/CompleteLessonButton";
import { getCompleteCourseProgressData } from "@/app/_libs/supabase/progress";

async function LessonDetailPage( props : SlugPageProps   ) {
    const params = await props.params;

    // lessonを取得してからprogressDataを取得
    const lessonData = await getLessonDetail(params.slug)
    const progressData = await getCompleteCourseProgressData(lessonData.course.id)

    const isCompleted = progressData.completedLessonIds.has(params.slug)

    // 次のレッスンを取得
    const currentIndex = progressData.lessons.findIndex(l => l.id === params.slug)
    const nextLesson = progressData.lessons[currentIndex + 1] || null

    // コースの進捗率

    // YouTube/Vimeo 両対応
    const getEmbedUrl = (url: string) => {
    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Vimeo
    if (url.includes('vimeo.com')) {
        const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
        return `https://player.vimeo.com/video/${videoId}`;
    }
    
    // それ以外（既に埋め込みURLの場合など）
    return url;
    };

  return (
    <LessonLayout
    lessons={progressData.lessons.map(l => ({ id: l.id, title: l.title }))}
    currentLessonId={lessonData.id}
    completedLessonIds={progressData.completedLessonIds}
    >
        <div>
            <h1 className='page-heading-title'>{lessonData.title}</h1>

            {lessonData.detail && (
            <div
            dangerouslySetInnerHTML= {{
                __html: `${lessonData.detail}`
            }}
            style={{ color: "var(--color-medium-gray)", marginBottom: "var(--spacing-md)" }}
            className="rich-editor"
            />
            )}

            {lessonData.movie && (
            <div className={styles.videoWrapper}>
                <iframe
                src={getEmbedUrl(lessonData.movie)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </div>
            )}

            <div className="flex-between mb-md">
            <div>
            <h3>{lessonData.course.title}</h3>
            <p style={{color: "var(--color-medium-gray)"}} >{lessonData.course.description}</p>
            </div>
            <div className='text-right'>
            
            <div style={{ color: "var(--color-accent)", fontWeight: "600", fontSize: "1.5rem" }}>
            <span className='text-xs text-medium-gray' style={{color: "var(--color-medium-gray)", fontSize: "14px"}}>コースの進捗：</span> {progressData.percentage}%
            </div>
            </div>
            </div>
            <CompleteLessonButton
            lessonId={params.slug} 
            courseId={lessonData.course.id}
            isCompleted={isCompleted}
            nextLessonId={nextLesson?.id}
            />
        </div>
    </LessonLayout>
  )
}

export default LessonDetailPage
