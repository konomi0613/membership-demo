import { getCourseDetail, getLessonsList } from "@/app/_libs/microcms"
import { SlugPageProps } from "@/app/_libs/types";
import Link from "next/link";
import LessonLayout from "../../_components/LessonLayout";

async function CourseDetailPage( props : SlugPageProps   ) {
    const params = await props.params;
    const lessons = await getLessonsList({
      filters: `course[equals]${params.slug}`
    });

    const course = await getCourseDetail(params.slug);

  return (
    <LessonLayout 
      lessons={lessons.contents.map(l => ({ id: l.id, title: l.title }))}
    >
      <div>
        <h1 className='page-heading-title'>{course.title}</h1>

        {course.description && (
        <p style={{ color: "var(--color-medium-gray)", marginBottom: "var(--spacing-md)" }}>{course.description}</p>
        )
        }

        <div className="video-player">
        {course.icon}
        </div>
        <Link href={`/lessons/${lessons.contents[0].id}`} className="btn btn-primary">レッスンを開始する</Link>
      </div>
  </LessonLayout>
  )
}

export default CourseDetailPage
