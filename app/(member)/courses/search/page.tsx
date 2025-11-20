import { getCourseList, getLessonsList } from "@/app/_libs/microcms"
import Link from "next/link";
import { notFound } from "next/navigation";
import SearchField from "../../_components/SearchField";
import { SlugPageProps } from "@/app/_libs/types";

async function Page( props : SlugPageProps ) {
  const searchParams = await props.searchParams;
  const courses = await getCourseList({
    q: searchParams.q
  }).catch(notFound);

  // 各コースごとにレッスン数を取得
  const coursesWithLessonCount = await Promise.all(
    courses.contents.map(async (course) => {
      const lessons = await getLessonsList({
        filters: `course[equals]${course.id}`
      }).catch(notFound);
      return {
        ...course,
        lessonCount: lessons.totalCount
      };
    })
  )
  return (
    <>
      <SearchField />
      <h1 className='page-heading-title'>「{searchParams.q}」コース検索結果</h1>

      <div className="category-grid">
      
      {coursesWithLessonCount.map(( content ) => (
        <Link 
        href={`/courses/${content.id}`}
        key={content.id} 
        className="card -hover category-tile">
          <div className="course-thumbnail">
          {content.icon}
          </div>
          <h3>{content.title}</h3>
          <div style={{ marginTop: 'var(--spacing-sm)' }} ><span className="course-count">{content.lessonCount}講座</span></div>
        </Link>
      ))}

      </div>
    </>
  )
}

export default Page
