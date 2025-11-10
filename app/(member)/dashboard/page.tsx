// ログイン直後のホーム画面
// 最近の講座、お知らせ、進捗サマリーなど

import { getNewsList } from '@/app/_libs/microcms';
import { MYPAGE_NEWS_LIMIT } from '@/app/_constants';
import NewsCard from '../_components/NewsCard';

async function page() {
  const newsList = await getNewsList({ limit: MYPAGE_NEWS_LIMIT, orders: '-publishedAt' });
  return (
    < >
       <div className="card mt-[var(--spacing-lg)]">
       <h2 className="text-[var(--color-main)] mb-[var(--spacing-xs)]">田中さん、ようこそ</h2>
       <p className="text-[var(--color-medium-gray)]">今日も学習を続けましょう</p>
      </div>
      <h2 className="page-heading-title text-xs">受講中の講座</h2>
      <div className="grid-2 mb-lg">
       <div className="card">
        <div className="flex-between">
         <div>
          <h3 className="course-title">環境構築とセットアップ</h3>
          <p>レッスン 8 / 12</p>
         </div>
         <div className="progress-ring">
          <svg width="50" height="50"><circle className="bg" cx="25" cy="25" r="20" strokeDasharray="125.66" strokeDashoffset="0"></circle> <circle className="progress" cx="25" cy="25" r="20" strokeDasharray="125.66" strokeDashoffset="37.7"></circle>
          </svg>
          <div className="progress-text">
           70%
          </div>
         </div>
        </div><a href="#" className="btn btn-primary mt-[var(--spacing-sm)]" >続きを見る</a>
       </div>
       <div className="card">
        <div className="flex-between">
         <div>
          <h3 className="course-title">デザインシステム構築</h3>
          <p>レッスン 3 / 15</p>
         </div>
         <div className="progress-ring">
          <svg width="50" height="50"><circle className="bg" cx="25" cy="25" r="20" strokeDasharray="125.66" strokeDashoffset="0"></circle> <circle className="progress" cx="25" cy="25" r="20" strokeDasharray="125.66" strokeDashoffset="100.5"></circle>
          </svg>
          <div className="progress-text">
           20%
          </div>
         </div>
        </div><a href="#" className="btn btn-primary mt-[var(--spacing-sm)]" >続きを見る</a>
       </div>
      </div>
      <h2 className="page-heading-title">お知らせ</h2>
      <ul>
        { newsList.contents.map(( content ) => 
          <NewsCard key={content.id} news={content} />
        )}
      </ul>
      <a href="/news" className="btn btn-primary mt-[var(--spacing-sm)]" >続きを見る</a>
     </>
  )
}

export default page
