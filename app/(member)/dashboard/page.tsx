// ログイン直後のホーム画面
// 最近の講座、お知らせ、進捗サマリーなど

import { getNewsList } from '@/app/_libs/microcms';
import style from './page.module.css';
import Image from 'next/image';
import { MYPAGE_NEWS_LIMIT } from '@/app/_constants';

type News = {
  id: string;
  title: string;
  text: string;
  category?: {
    name : string;
  }
  publishedAt: string;
  createdAt: string;
}

const data: {
  contents: News[] } = {
  contents: [{
    id: "1",
    title: "新レッスン「Gutenbergブロック開発」を追加しました",
    text: "新しいレッスンとして、Gutenbergブロック開発に関する内容を追加しました。ぜひご覧ください！",
    publishedAt: "2024-03-15",
    createdAt: "2024-03-10",
    category: {
      name: "リリース",
    }
  },
  {
    id: "2",
    title: "新レッスン「2」を追加しました",
    text: "新しいレッスンとして、レッスン2に関する内容を追加しました。ぜひご覧ください！",
    publishedAt: "2024-03-16",
    createdAt: "2024-03-11",
    category: {
      name: "お知らせ",
    }
  },
  {
    id: "3",
    title: "新レッスン「3」を追加しました",
    text: "新しいレッスンとして、レッスン3に関する内容を追加しました。ぜひご覧ください！",
    publishedAt: "2024-03-17",
    createdAt: "2024-03-12",
    category: {
      name: "イベント",
    }
  },
  {
    id: "4",
    title: "新レッスン「4」を追加しました",
    text: "新しいレッスンとして、レッスン4に関する内容を追加しました。ぜひご覧ください！",
    publishedAt: "2024-03-18",
    createdAt: "2024-03-13",
    category: {
      name: "イベント",
    }
  }
]
}

async function page() {
  const newsList = await getNewsList({ limit: MYPAGE_NEWS_LIMIT, orders: '-publishedAt' });
  return (
    < >
       <div className="card" style={{marginBottom: 'var(--spacing-lg)'}}>
       <h2 style={{color: 'var(--color-main)', marginBottom: 'var(--spacing-xs)'}}>田中さん、ようこそ</h2>
       <p style={{color: 'var(--color-medium-gray)'}}>今日も学習を続けましょう</p>
      </div>
      <h2 className="page-heading-title">受講中の講座</h2>
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
        </div><a href="#" className="btn btn-primary" style={{marginTop: 'var(--spacing-sm)'}}>続きを見る</a>
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
        </div><a href="#" className="btn btn-primary" style={{marginTop: 'var(--spacing-sm)'}}>続きを見る</a>
       </div>
      </div>
      <h2 className="page-heading-title">お知らせ</h2>
      <ul className={style.announcementsList}>
        { newsList.contents.map(( content ) => 
        <li key={content.id} className={`${style.announcementItem} card`}>
          <div className={style.announcementContent}>
            {
              content.thumbnail ? (
              <Image
                src={content.thumbnail.url}
                alt={content.title}
                width={300}
                height={200}
                className={style.announcementImage}
              />
            ) : (
              <Image src="/noimage.jpg" alt="noimage" width={100} height={100} className={style.announcementImage} />
            )
            }
            <div>
              <div style={{fontSize: '12px', color: 'var(--color-medium-gray)', marginBottom: 'var(--spacing-xs)'}}>
              {content.publishedAt}
              </div>
              <h3 className={style.newsTitle}>{content.title}</h3>
            </div>
          </div>
          <div className={style.announcementBadge}>
          {content.category?.name}
          </div>
        </li>
        )}

      </ul>
     </>
  )
}

export default page
