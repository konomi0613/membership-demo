import { getMembersList } from "@/app/_libs/microcms";
import style from "./page.module.scss";
import Image from "next/image";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";

export const metadata = {
  title: "WordPressテーマ開発講座 - 学習ポータル",
};

async function GuidePage() {
  const membersList = await getMembersList({limit: MEMBERS_LIST_LIMIT});
  const owner = membersList.contents.find(m => m.id === 'a-tanaka');
  const members = membersList.contents.filter(m => m.id !== 'a-tanaka');

  return (
    <>
    <div className="page-container">
      <section className="page-section">
        <h2 className="page-heading-title">主催挨拶</h2>
        <div className={`card ${style.ownerCard}`}>
          
          {owner?.video && (
            <div 
            className={style.ownerVideo}
            dangerouslySetInnerHTML={{
              __html: `${owner.video}`,
          }} />
          )}

          {owner?.profile && (
            <div 
            className={style.ownerProfile}
            dangerouslySetInnerHTML={{
              __html: `${owner.profile}`,
            }} />
          )}
        </div>
      </section>

            <section className="page-section">
        <h2 className="page-heading-title">講師紹介</h2>
        <ul className={style.memberList}>
            {members.map((member) => (
            <li className={`${style.memberCard} card`} key={member.id}>
                <div className={style.memberHeader}>
                <div className={style.memberImage}>
                    {member.image && (
                    <Image
                        src={member.image.url}
                        alt={member.name}
                        width={120}
                        height={120}
                    />
                    )}
                </div>
                <div>
                    <p className={style.memberPosition}>{member.position}</p>
                    <h3 className={style.memberTitle}>{member.name}</h3>
                </div>
                </div>
                <div 
                className={style.memberProfile}
                dangerouslySetInnerHTML={{
                    __html: `${member.profile}`,
                }} />
            </li>
            ))}
        </ul>
      </section>

      <section className="page-section">
        <h2 className="page-heading-title">講座について</h2>
        <div className={`${style.guideCard} card`}>
          <div>
            <h3 className="page-heading__3">講座のゴール</h3>
            <div className="course-thumbnail">sample</div>
          </div>
          <div>
            <h3 className="page-heading__3">講座で学ぶこと</h3>
            <div className="course-thumbnail">sample</div>
          </div>
        </div>

      </section>
      
      <section className="page-section">
        <h2 className="page-heading-title">講座カリキュラム</h2>
        <div className="card">
          <p className={style.guideDescription}>本講座は、動画学習でのインプット期間（１ヶ月）＋サイト作成実践期間（１ヶ月）の２ヶ月間のコースとなります。</p>
          <div className={`${style.guideCard}`}>
            <div>
              <h3 className="page-heading__3">インプット期間（１ヶ月）</h3>
              <div className="course-thumbnail">sample</div>
            </div>
            <div>
              <h3 className="page-heading__3">アウトプット期間（１ヶ月）</h3>
              <div className="course-thumbnail">sample</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </>

  );
}

export default GuidePage