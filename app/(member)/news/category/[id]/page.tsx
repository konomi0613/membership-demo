import NewsCard from '@/app/(member)/_components/NewsCard';
import { NEWS_LIMIT } from '@/app/_constants';
import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';
import { SlugPageProps } from '@/app/_libs/types';
import { notFound } from 'next/navigation';


export default async function Page(props: SlugPageProps) {
  const params = await props.params;
  const category = await getCategoryDetail(params.id).catch(notFound);

  const newsList = await getNewsList({
    limit: NEWS_LIMIT,
    filters: `category[equals]${params.id}`,
  })

  return (
    <>
    <h1 className="page-heading-title">「{category.name}」の一覧</h1>
    <ul>
    { newsList.contents.map(( content ) => 
        <NewsCard key={content.id} news={content} />
    )}
    </ul>
    </>
  )
}
