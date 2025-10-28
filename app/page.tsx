import "./styles/globals.css";
import Script from "next/script";
import ClientApp from "./components/ClientApp";

export const metadata = {
  title: "WordPressテーマ開発講座 - 学習ポータル",
};

export default function Page() {
  return (
    <>
      {/* external resources: font + tailwind CDN (you may prefer to add font in layout) */}
      <Script
        src="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
        strategy="beforeInteractive"
      />
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      {/* If you have local SDK files (/_sdk/...), serve them from public/_sdk/... and load here */}
      <Script src="/_sdk/element_sdk.js" strategy="lazyOnload" />
      <Script src="/_sdk/data_sdk.js" strategy="lazyOnload" />

      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo" id="site-title">
            WordPressテーマ開発講座
          </a>
          <ul className="nav-links">
            <li>
              <a href="#" data-target="home" className="nav-link active">
                ホーム
              </a>
            </li>
            <li>
              <a href="#" data-target="lessons" className="nav-link">
                講座一覧
              </a>
            </li>
            <li>
              <a href="#" data-target="tips" className="nav-link">
                お役立ち情報
              </a>
            </li>
            <li>
              <a href="#" data-target="faq" className="nav-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" data-target="contact" className="nav-link">
                お問い合わせ
              </a>
            </li>
            <li>
              <a href="#" data-target="login" className="nav-link">
                ログイン
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
      {/* Home */}
      <section id="home" className="page active">
        <div className="container">
          <div className="hero-section">
            <h1 className="hero-title" id="course-title">
              WordPressテーマ開発講座
            </h1>
            <p className="hero-subtitle" id="course-subtitle">
              オリジナルテーマを作ろう
            </p>
            <p id="welcome-message">WordPressの世界へようこそ</p>
            <br />
            <a href="#" data-target="lessons" className="cta-button nav-cta">
              講座を始める
            </a>
          </div>

          <div className="page-section">
            <h2 className="page-title">講座の特徴</h2>
            <p className="page-subtitle" id="course-description">
              初心者から上級者まで学べる実践的な講座です
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>12のレッスン動画</h3>
                <p>基礎から応用まで段階的に学習できる構成になっています</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>実践的なコンテンツ</h3>
                <p>実際のテーマ開発で使える技術とノウハウを習得できます</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>サポート充実</h3>
                <p>FAQやお役立ち記事で学習をしっかりサポートします</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="lessons" className="page">
        <div className="container">
        <div className="page-section">
          <h1 className="page-title">講座一覧</h1>
          <p className="page-subtitle">12のレッスンで WordPress テーマ開発をマスターしましょう</p>
          <div className="lessons-grid">
          <div className="lesson-card" data-target="showPage('lesson-detail')">
            <div className="lesson-thumbnail">
            🎬
            </div>
            <div className="lesson-content">
            <h3 className="lesson-title">レッスン1: WordPressの基礎知識</h3>
            <p className="lesson-date">2024年1月15日公開</p>
            <p className="lesson-description">WordPressの仕組みとテーマの役割について学びます。初心者の方はここから始めましょう。</p>
            </div>
          </div>
          <div className="lesson-card" data-target="showPage('lesson-detail')">
            <div className="lesson-thumbnail">
            🎨
            </div>
            <div className="lesson-content">
            <h3 className="lesson-title">レッスン2: テーマの構造とファイル</h3>
            <p className="lesson-date">2024年1月22日公開</p>
            <p className="lesson-description">テーマに必要なファイルとディレクトリ構造について詳しく解説します。</p>
            </div>
          </div>
          <div className="lesson-card" data-target="showPage('lesson-detail')">
            <div className="lesson-thumbnail">
            ⚙️
            </div>
            <div className="lesson-content">
            <h3 className="lesson-title">レッスン3: functions.phpの活用</h3>
            <p className="lesson-date">2024年1月29日公開</p>
            <p className="lesson-description">テーマの機能を拡張するfunctions.phpの使い方をマスターします。</p>
            </div>
          </div>
          <div className="lesson-card" data-target="showPage('lesson-detail')">
            <div className="lesson-thumbnail">
            📱
            </div>
            <div className="lesson-content">
            <h3 className="lesson-title">レッスン4: レスポンシブデザイン</h3>
            <p className="lesson-date">2024年2月5日公開</p>
            <p className="lesson-description">モバイルファーストなテーマ作成のテクニックを学びます。</p>
            </div>
          </div>
          <div className="lesson-card" data-target="showPage('lesson-detail')">
            <div className="lesson-thumbnail">
            🔧
            </div>
            <div className="lesson-content">
            <h3 className="lesson-title">レッスン5: カスタムフィールドの実装</h3>
            <p className="lesson-date">2024年2月12日公開</p>
            <p className="lesson-description">Advanced Custom Fieldsを使った柔軟なコンテンツ管理を実現します。</p>
            </div>
          </div>
          <div className="lesson-card" data-target="showPage('lesson-detail')">
            <div className="lesson-thumbnail">
            🎯
            </div>
            <div className="lesson-content">
            <h3 className="lesson-title">レッスン6: SEO対策とパフォーマンス</h3>
            <p className="lesson-date">2024年2月19日公開</p>
            <p className="lesson-description">検索エンジンに優しく、高速なテーマを作成するポイントを解説します。</p>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>

      <div id="lesson-detail" className="page">
        <div className="container">
        <div className="page-section">
          <h1 className="page-title">レッスン1: WordPressの基礎知識</h1>
          <p className="page-subtitle">2024年1月15日公開 | 所要時間: 25分</p>
          <div className="video-container">
          ▶️
          </div>
          <div className="lesson-content">
          <h3>このレッスンで学ぶこと</h3>
          <ul style={{ margin: '1rem 0', paddingLeft: '2rem', color: '#666' }}>
            <li>WordPressの基本的な仕組み</li>
            <li>テーマとプラグインの違い</li>
            <li>開発環境の準備</li>
            <li>必要なツールとソフトウェア</li>
          </ul>
          <h3>関連するお役立ち情報</h3>
          <div style={{ background: '#F5E9D4', padding: '1rem', borderRadius: '10px', margin: '1rem 0' }}>
            <p>💡 <strong>開発環境構築のコツ:</strong> Local by Flywheelを使うと簡単にローカル環境が作れます</p>
          </div>
          </div>
          <div className="lesson-nav"><button className="nav-button" disabled>← 前のレッスン</button> <button className="nav-button" data-target="showPage('lesson-detail')">次のレッスン →</button>
          </div>
        </div>
        </div>
      </div>

      <div id="tips" className="page">
        <div className="container">
        <div className="page-section">
          <h1 className="page-title">お役立ち情報</h1>
          <p className="page-subtitle">WordPress テーマ開発に役立つ記事とTipsをお届けします</p>
          <div className="tips-filters"><button className="filter-tag active" data-target="filterTips('all')">すべて</button> <button className="filter-tag" data-target="filterTips('basic')">基礎知識</button> <button className="filter-tag" data-target="filterTips('advanced')">応用技術</button> <button className="filter-tag" data-target="filterTips('design')">デザイン</button> <button className="filter-tag" data-target="filterTips('performance')">パフォーマンス</button>
          </div>
          <div className="articles-grid">
          <article className="article-card" data-category="basic">
            <div className="article-image">
            📖
            </div>
            <div className="article-content">
            <div className="article-tags"><span className="article-tag">基礎知識</span>
            </div>
            <h3>WordPressテーマの必須ファイル一覧</h3>
            <p>テーマ作成に最低限必要なファイルとその役割について詳しく解説します。</p>
            </div>
          </article>
          <article className="article-card" data-category="design">
            <div className="article-image">
            🎨
            </div>
            <div className="article-content">
            <div className="article-tags"><span className="article-tag">デザイン</span>
            </div>
            <h3>美しいレイアウトを作るCSS Grid活用法</h3>
            <p>モダンなレイアウト手法であるCSS Gridを使ったテーマデザインのコツをご紹介。</p>
            </div>
          </article>
          <article className="article-card" data-category="advanced">
            <div className="article-image">
            ⚡
            </div>
            <div className="article-content">
            <div className="article-tags"><span className="article-tag">応用技術</span>
            </div>
            <h3>カスタム投稿タイプの実装方法</h3>
            <p>ポートフォリオサイトやコーポレートサイトに必須のカスタム投稿タイプを作成しましょう。</p>
            </div>
          </article>
          <article className="article-card" data-category="performance">
            <div className="article-image">
            🚀
            </div>
            <div className="article-content">
            <div className="article-tags"><span className="article-tag">パフォーマンス</span>
            </div>
            <h3>サイト高速化のための最適化テクニック</h3>
            <p>画像最適化、キャッシュ、CDNなど、サイトを高速化するための実践的な方法を解説。</p>
            </div>
          </article>
          <article className="article-card" data-category="basic">
            <div className="article-image">
            🔧
            </div>
            <div className="article-content">
            <div className="article-tags"><span className="article-tag">基礎知識</span>
            </div>
            <h3>WordPressフックの基本的な使い方</h3>
            <p>アクションフックとフィルターフックを理解して、テーマの機能を拡張しましょう。</p>
            </div>
          </article>
          <article className="article-card" data-category="design">
            <div className="article-image">
            📱
            </div>
            <div className="article-content">
            <div className="article-tags"><span className="article-tag">デザイン</span>
            </div>
            <h3>モバイルファーストデザインの実践</h3>
            <p>スマートフォンユーザーを意識したレスポンシブテーマの作り方をステップバイステップで説明。</p>
            </div>
          </article>
          </div>
        </div>
        </div>
      </div>

   <div id="faq" className="page">
    <div className="container">
     <div className="page-section">
      <h1 className="page-title">よくある質問</h1>
      <p className="page-subtitle">講座に関するよくある質問をまとめました</p>
      <div className="faq-categories"><button className="category-button active" data-target="filterFAQ('all')">すべて</button> <button className="category-button" data-target="filterFAQ('course')">講座について</button> <button className="category-button" data-target="filterFAQ('technical')">技術的な質問</button> <button className="category-button" data-target="filterFAQ('support')">サポート</button>
      </div>
      <div className="faq-list">
       <div className="faq-item" data-category="course">
        <div className="faq-question" data-target="toggleFAQ(this)"><span>この講座は初心者でも受講できますか？</span> <span>+</span>
        </div>
        <div className="faq-answer">
         はい、初心者の方でも安心して受講いただけます。基礎から丁寧に解説しており、HTMLとCSSの基本的な知識があれば十分です。わからないことがあればお気軽にお問い合わせください。
        </div>
       </div>
       <div className="faq-item" data-category="course">
        <div className="faq-question" data-target="toggleFAQ(this)"><span>講座の視聴期限はありますか？</span> <span>+</span>
        </div>
        <div className="faq-answer">
         視聴期限はございません。一度ご購入いただければ、いつでも何度でも動画をご視聴いただけます。自分のペースで学習を進めてください。
        </div>
       </div>
       <div className="faq-item" data-category="technical">
        <div className="faq-question" data-target="toggleFAQ(this)"><span>開発環境はどのように準備すればよいですか？</span> <span>+</span>
        </div>
        <div className="faq-answer">
         Local by FlywheelやXAMPPなどのローカル開発環境をおすすめしています。レッスン1で詳しい環境構築方法を解説していますので、そちらをご参照ください。
        </div>
       </div>
       <div className="faq-item" data-category="technical">
        <div className="faq-question" data-target="toggleFAQ(this)"><span>PHPの知識は必要ですか？</span> <span>+</span>
        </div>
        <div className="faq-answer">
         基本的なPHPの知識があると理解が深まりますが、講座内でWordPressに必要なPHPについても解説しています。プログラミング初心者の方でも段階的に学習できる内容になっています。
        </div>
       </div>
       <div className="faq-item" data-category="support">
        <div className="faq-question" data-target="toggleFAQ(this)"><span>質問がある場合はどこに連絡すればよいですか？</span> <span>+</span>
        </div>
        <div className="faq-answer">
         お問い合わせページからご連絡ください。技術的な質問から講座内容に関する疑問まで、お気軽にお尋ねください。通常24時間以内にご返答いたします。
        </div>
       </div>
       <div className="faq-item" data-category="support">
        <div className="faq-question" data-target="toggleFAQ(this)"><span>返金保証はありますか？</span> <span>+</span>
        </div>
        <div className="faq-answer">
         ご購入から30日以内であれば、理由を問わず全額返金いたします。講座内容にご満足いただけない場合は、お気軽にお申し出ください。
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div id="contact" className="page">
    <div className="container">
     <div className="page-section">
      <h1 className="page-title">お問い合わせ</h1>
      <p className="page-subtitle">ご質問やご相談がございましたら、お気軽にお問い合わせください</p>
      <form className="contact-form">
       <div className="form-group"><label htmlFor="name" className="form-label">お名前 *</label> <input type="text" id="name" name="name" className="form-input" required />
       </div>
       <div className="form-group"><label htmlFor="email" className="form-label">メールアドレス *</label> <input type="email" id="email" name="email" className="form-input" required />
       </div>
       <div className="form-group"><label htmlFor="subject" className="form-label">件名</label> <input type="text" id="subject" name="subject" className="form-input" placeholder="お問い合わせの件名をご入力ください" />
       </div>
       <div className="form-group"><label htmlFor="message" className="form-label">メッセージ *</label> <textarea id="message" name="message" className="form-textarea" required placeholder="お問い合わせ内容を詳しくご記入ください"></textarea>
       </div><button type="submit" className="submit-button">送信する</button>
      </form>
     </div>
    </div>
   </div>

    <div id="login" className="page">
      <div className="container">
        <div className="page-section">
          <div className="login-container">
            <h1 className="page-title">ログイン</h1>
            <div className="login-notice">
              会員限定コンテンツです。ログインしてご覧ください。
            </div>
            <form className="contact-form">
              <div className="form-group"><label htmlFor="login-email" className="form-label">メールアドレス</label> <input type="email" id="login-email" name="email" className="form-input" required />
              </div>
              <div className="form-group"><label htmlFor="password" className="form-label">パスワード</label> <input type="password" id="password" name="password" className="form-input" required />
              </div><button type="submit" className="submit-button">ログイン</button>
            </form>
            <div className="social-login"><button className="social-button" data-target="handleSocialLogin('google')"> 🔍 Googleでログイン </button> <button className="social-button" data-target="handleSocialLogin('facebook')"> 📘 Facebookでログイン </button> <button className="social-button" data-target="handleSocialLogin('twitter')"> 🐦 Twitterでログイン </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      </main>

      <footer className="footer">
        <div className="container">
          <p id="footer-text">© 2024 WordPressテーマ開発講座</p>
        </div>
      </footer>

      {/* Client-side behavior (event handlers, SDK init) */}
      <ClientApp />
    </>
  );
}
