import { LESSONS_LIMIT } from "@/app/_constants";
import { getLessonDetail, getLessonsList } from "@/app/_libs/microcms"
import { SlugPageProps } from "@/app/_libs/types";
import Link from "next/link";
import styles from "./page.module.scss"
import LessonLayout from "../../_components/LessonLayout";

async function Page( props : SlugPageProps   ) {
    const params = await props.params;
    const lesson = await getLessonDetail(params.slug);
    const lessons = await getLessonsList({
        limit: LESSONS_LIMIT,
        filters: `course[equals]${lesson.course.id}`
    });

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
      lessons={lessons.contents.map(l => ({ id: l.id, title: l.title }))}
      currentLessonId={lesson.id}
    >
        <div>
            <h1 className='page-heading-title'>{lesson.title}</h1>

            {lesson.detail && (
            <div
            dangerouslySetInnerHTML= {{
                __html: `${lesson.detail}`
            }}
            style={{ color: "var(--color-medium-gray)", marginBottom: "var(--spacing-md)" }}
            className="rich-editor"
            />
            )}

            {lesson.movie && (
            <div className={styles.videoWrapper}>
                <iframe
                src={getEmbedUrl(lesson.movie)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </div>
            )}

            <div className="flex-between mb-md">
            <div>
            <h3>{lesson.course.title}</h3>
            <p style={{color: "var(--color-medium-gray)"}} >{lesson.course.description}</p>
            </div>
            <div className='text-right'>
            <div className='text-xs text-medium-gray' style={{color: "var(--color-medium-gray)", fontSize: "14px"}}>
            進捗
            </div>
            <div style={{ color: "var(--color-accent)", fontWeight: "600", fontSize: "1.5rem" }}>
            70%
            </div>
            </div>
            </div>
            <a href="#" className="btn btn-primary">レッスンを完了する</a>
        </div>
    </LessonLayout>
  )
}

export default Page
