import NewsCard from '../_components/NewsCard'
import { NEWS_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';



async function page() {
    const newsList = await getNewsList({ limit: NEWS_LIMIT, orders: '-publishedAt' });
    
  return (
    <>
    <h1 className="page-heading-title">会員お知らせ</h1>
    <ul>
    { newsList.contents.map(( content ) => 
        <NewsCard key={content.id} news={content} />
    )}
    </ul>
    </>
  )
}

export default page
