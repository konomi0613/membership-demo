import { getNewsDetail } from "@/app/_libs/microcms"
import styles from './page.module.scss'
import Image from "next/image";
import { formatDate } from "@/app/_libs/utils";
import { RxTimer, RxUpdate } from "react-icons/rx";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }> 
}

export default async function Page(props: Props) {
    const params = await props.params;
    const news = await getNewsDetail(params.slug);
    if (!news) notFound();
  return (
<article className={`${styles.newsArticle} p-6 md:p-8`}>
      <header className={styles.header}>
        <div className={styles.meta}>
          {news.category.name && (
            <div className="news-badge" >
              {news.category.name}
            </div>
          )}
          <div className={styles.dates}>
            <time dateTime={news.publishedAt}>
              <RxTimer className="text-[13px]" /> {formatDate(news.publishedAt ? news.publishedAt : news.createdAt)}
            </time>
            {news.updatedAt && (
              <time dateTime={news.updatedAt} className={styles.updated}>
                <RxUpdate className="text-[13px]" /> {formatDate(news.updatedAt ? news.updatedAt : news.createdAt)}
              </time>
            )}
          </div>
        </div>

        <h1 className={styles.title}>{news.title}</h1>

        {news.thumbnail?.url && (
          <figure className={styles.thumbnail}>
            <Image
              src={news.thumbnail.url}
              alt={news.thumbnail.alt ?? news.title}
              width={1200}
              height={630}
              style={{ width: '100%', height: 'auto' }}
              priority={false}
            />
          </figure>
        )}
      </header>

        { news.content ? (
            <section 
            className={styles.content}
            dangerouslySetInnerHTML={{
                __html: `${news.content}`,
            }} />
        ) : (
            <div>記事の本文はありません。</div>
        )}

      <footer className={styles.footer}>
        <a className={styles.backLink} href="/news">← お知らせ一覧へ</a>
      </footer>
    </article>
  )
}
