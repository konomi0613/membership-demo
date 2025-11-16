import { notFound } from "next/navigation";
import { getCourseList } from "../_libs/microcms";
import style from "./page.module.scss";

export const metadata = {
  title: "WordPressテーマ開発講座 - 学習ポータル",
};

export default async function Page() {
      const toggleFAQ = () => {   
        return null
      }

      const popularCourse = await getCourseList({
        filters: "popular[equals]true"
      }).catch(notFound)

  return (
    <>
    
    <div className="page-container">
    
      <div className={style.hero}>
        <h1 id="hero-headline">プロフェッショナルなWordPressテーマを作ろう</h1>
        <p id="hero-subtitle">実践的なカリキュラムで、販売可能なテーマ開発スキルを習得</p>
        <div className={style.heroActions}>
          <a href="#pricing" className="btn btn-primary">今すぐ始める</a>
          <a href="#faq" className="btn btn-secondary">よくある質問を見る</a>
       </div>
      </div>

      <div className={style.featuresGrid}>
       <div className={`card ${style.featureCard}`}>
        <div className={style.featureIcon}>
         🎯
        </div>
        <h3>実践的カリキュラム</h3>
        <p>実際に販売できるテーマを作成</p>
       </div>
       <div className={`card ${style.featureCard}`}>
        <div className={style.featureIcon}>
         👨‍💻
        </div>
        <h3>プロの指導</h3>
        <p>現役開発者による丁寧なサポート</p>
       </div>
       <div className={`card ${style.featureCard}`}>
        <div className={style.featureIcon}>
         🚀
        </div>
        <h3>段階的学習</h3>
        <p>基礎から応用まで体系的に学習</p>
       </div>
      </div>

      <h2 className="page-heading-title">人気の講座</h2>
      <div className={style.featuresGrid}>
        { popularCourse.contents.map((content) => (
        <div 
        key={content.id}
        className="card -hover course-card">
          <div className="course-thumbnail">
          {content.icon}
          </div>
          <h3 className="course-title">{content.title}</h3>
          {content.description && (
            <p>{content.description}</p>
          )}
          <div className="course-meta"><span className="tag beginner">初級</span>
          </div>
        </div>
        ))  }

        
        </div>
      </div>

      <h2 id="pricing" className="page-heading-title">料金プラン</h2>
      <div className={style.pricingGrid}>
       <div className={`card ${style.pricingCard}`}>
        <h3>無料プラン</h3>
        <div className={style.price}>
         ¥0<span style={{ "fontSize": "16px", "color": "var(--color-medium-gray)"}} >/月</span>
        </div>
        <ul className={style.featureList}>
         <li>基礎講座3つまで視聴可能</li>
         <li>コミュニティフォーラム参加</li>
         <li>基本的な学習進捗管理</li>
        </ul><a href="/signup?plan=free" className="btn btn-secondary">無料で始める</a>
       </div>
       <div className={`card ${style.pricingCard} ${style.featured}`}>
        <h3>プレミアムプラン</h3>
        <div className={style.price}>
         ¥2,980<span style={{ "fontSize": "16px", "color": "var(--color-medium-gray)"}} >/月</span>
        </div>
        <ul className={style.featureList}>
         <li>全講座無制限視聴</li>
         <li>個別メンタリング月1回</li>
         <li>ソースコードダウンロード</li>
         <li>優先サポート</li>
         <li>修了証明書発行</li>
        </ul><a href="/signup?plan=premium" className="btn btn-primary">プレミアムを始める</a> 
        {/* プレミアムの場合、登録後に決済ページへ誘導 */}
       </div>
      </div>

      <h2 id="faq" className="page-heading-title">よくある質問</h2>
      <div className="faq-item"><button className="faq-question"> プランの変更はいつでも可能ですか？ <span>+</span> </button>
       <div className="faq-answer">
        はい、いつでもプランの変更が可能です。アップグレードは即座に反映され、ダウングレードは次回請求日から適用されます。
       </div>
      </div>
      <div className="faq-item"><button className="faq-question" > 無料体験期間はありますか？ <span>+</span> </button>
       <div className="faq-answer">
        プレミアムプランには7日間の無料体験期間があります。クレジットカード登録は必要ですが、体験期間中に解約すれば料金は発生しません。
       </div>
      </div>   
  </>

  );
}
