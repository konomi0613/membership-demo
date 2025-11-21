import NewsCard from '@/app/(member)/_components/NewsCard';
import Pagination from '@/app/(member)/_components/Pagination';
import { NEWS_LIMIT } from '@/app/_constants';
import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';
import { ListPageProps, SlugPageProps } from '@/app/_libs/types';
import { notFound } from 'next/navigation';

async function NewsCategoryPage( { params, searchParams } : SlugPageProps & ListPageProps ) {
    const [categoryParams, pageParams] = await Promise.all([
      params,
      searchParams
    ]);

    const currentPage = Number(pageParams.page) || 1;
    const offset = (currentPage - 1) * NEWS_LIMIT;

    const category = await getCategoryDetail(categoryParams.id).catch(notFound);

    const newsList = await getNewsList({
      limit: NEWS_LIMIT,
      filters: `category[equals]${category.id}`,
      offset
    })

    // 総ページ数を計算
    const totalPages = Math.ceil(newsList.totalCount / NEWS_LIMIT);

  return (
    <>
    <h1 className="page-heading-title">「{category.name}」の一覧</h1>
    <ul>
    { newsList.contents.map(( content ) => 
        <NewsCard key={content.id} news={content} />
    )}
    </ul>
    <Pagination 
    currentPage={currentPage} 
    totalPages={totalPages}
    basePath={`/news/category/${categoryParams.id}`}
    />
    </>
  )
}

export default NewsCategoryPage;