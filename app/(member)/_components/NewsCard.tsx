import Image from 'next/image'
import style from './NewsCard.module.scss'
import { formatDate } from '@/app/_libs/utils'
import { News } from '@/app/_libs/microcms'
import Link from 'next/link'
import { RxTimer } from 'react-icons/rx'

export const NewsCard = ({ news }: { news: News }) => {
  return (
         <li key={news.id} className={`${style.newsItem} card`}>
          <Link href={`/news/${news.id}`} className={style.newsContent}>
            {
              news.thumbnail ? (
              <Image
                src={news.thumbnail.url}
                alt={news.title}
                width={300}
                height={200}
                className={style.newsImage}
              />
            ) : (
              <Image src="/noimage.jpg" alt="noimage" width={100} height={100} className={style.newsImage} />
            )
            }
            <div>
              <div className="text-[12px] text-[var(--color-medium-gray)] mb-[var(--spacing-xs)]">
              <RxTimer /> {formatDate(news.publishedAt ? news.publishedAt : news.createdAt)}
              </div>
              <h3 className={style.newsTitle}>{news.title}</h3>
            </div>
          </Link>
          <div className={`news-badge ${style.newsBadge}`}>
          {news.category?.name}
          </div>
        </li>
  )
}

export default NewsCard
