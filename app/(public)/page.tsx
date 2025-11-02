import style from "./page.module.css";
import { getMembersList } from "../_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "../_constants";

export const metadata = {
  title: "WordPressテーマ開発講座 - 学習ポータル",
};

export default async function Page() {
  const data = await getMembersList({limit: MEMBERS_LIST_LIMIT});
  return (
    <>
    
    <div className="page-container">
    
      <div className="hero">
        <h1 id="hero-headline">プロフェッショナルなWordPressテーマを作ろう</h1>
        <p id="hero-subtitle">実践的なカリキュラムで、販売可能なテーマ開発スキルを習得</p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary">今すぐ始める</a>
          <a href="#" className="btn btn-secondary">詳細を見る</a>
       </div>
      </div>

      <div className="features-grid">
       <div className="card feature-card">
        <div className="feature-icon">
         🎯
        </div>
        <h3>実践的カリキュラム</h3>
        <p>実際に販売できるテーマを作成</p>
       </div>
       <div className="card feature-card">
        <div className="feature-icon">
         👨‍💻
        </div>
        <h3>プロの指導</h3>
        <p>現役開発者による丁寧なサポート</p>
       </div>
       <div className="card feature-card">
        <div className="feature-icon">
         🚀
        </div>
        <h3>段階的学習</h3>
        <p>基礎から応用まで体系的に学習</p>
       </div>
      </div>

      <h2 style={{ textAlign: "center", color: "var(--color-main)", marginBottom: "var(--spacing-md)" }}>人気の講座</h2>
      <div className="features-grid">
       <div className="card course-card">
        <div className="course-thumbnail">
         🏗️
        </div>
        <h3 className="course-title">環境構築とセットアップ</h3>
        <p>開発環境の構築から始めよう</p>
        <div className="course-meta"><span className="tag beginner">初級</span> <span>234名受講中</span>
        </div>
       </div>
       <div className={ process.env.LOGIN_STATUS ? "card course-card" : "card course-card locked" }>
        <div className="course-thumbnail">
         🎨
        </div>
        <h3 className="course-title">デザインシステム構築</h3>
        <p>再利用可能なコンポーネント設計</p>
        <div className="course-meta"><span className="tag intermediate">中級</span> <span>156名受講中</span>
        </div>
       </div>
       <div className={ process.env.LOGIN_STATUS ? "card course-card" : "card course-card locked" }>
        <div className="course-thumbnail">
         💰
        </div>
        <h3 className="course-title">テーマ販売戦略</h3>
        <p>マーケットプレイスでの販売方法</p>
        <div className="course-meta"><span className="tag advanced">上級</span> <span>89名受講中</span>
        </div>
       </div>
      </div>

      <h2 style={{ textAlign: "center", color: "var(--color-main)", marginBottom: "var(--spacing-md)" }}>運営メンバー</h2>
      <ul className={style.memberList}>
        {data.contents.map((member) => (
          <li className={`${style.memberCard} card`} key={member.id}>
            <div className={style.memberHeader}>
              <div className={style.memberImage}>
                {member.image && (
                  <img
                    src={member.image.url}
                    alt={member.name}
                  />
                )}
              </div>
              <div>
                <p className={style.memberPosition}>{member.position}</p>
                <h3 className={style.memberTitle}>{member.name}</h3>
              </div>
            </div>
            <p className={style.memberProfile}>{member.profile}</p>
        </li>
        ))}
      </ul>
    </div>
  </>

  );
}
