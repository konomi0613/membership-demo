import NewsCard from '../_components/NewsCard'
import { NEWS_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';
import Pagination from '../_components/Pagination';
import { ListPageProps } from '@/app/_libs/types';

async function NewsPage({ searchParams }: ListPageProps) {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    
    const offset = (currentPage - 1) * NEWS_LIMIT;
    const newsList = await getNewsList({ 
      limit: NEWS_LIMIT, 
      offset, 
     });
    
    // 総ページ数を計算
    const totalPages = Math.ceil(newsList.totalCount / NEWS_LIMIT);

  return (
    <>
    <h1 className="page-heading-title">会員お知らせ</h1>
    <ul>
    { newsList.contents.map(( content ) => 
        <NewsCard key={content.id} news={content} />
    )}
    </ul>

    <Pagination 
    basePath="/news"
    currentPage={currentPage} totalPages={totalPages} />
    </>
  )
}

export default NewsPage
