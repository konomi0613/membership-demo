function page() {
  return (
    <div>
       <div className="grid-2">
       <div>
        <h1 className='page-heading-title'>環境構築とセットアップ</h1>
        <p style={{ color: "var(--color-medium-gray)", marginBottom: "var(--spacing-md)" }}>WordPressテーマ開発に必要な環境を構築しましょう</p>
        <div className="video-player">
         ▶️
        </div>
        <div className="flex-between mb-md">
         <div>
          <h3>レッスン8: Local環境の設定</h3>
          <p style={{color: "var(--color-medium-gray)"}} >ローカル開発環境を構築する方法</p>
         </div>
         <div className='text-right'>
          <div className='text-xs text-medium-gray' style={{color: "var(--color-medium-gray)", fontSize: "14px"}}>
           進捗
          </div>
          <div style={{ color: "var(--color-accent)", fontWeight: "600", fontSize: "1.5rem" }}>
           70%
          </div>
         </div>
        </div><a href="#" className="btn btn-primary">次のレッスンへ</a>
       </div>
       <div className="sidebar">
        <h3 style={{ color: "var(--color-accent)", fontWeight: "600"}}>レッスン一覧</h3>
        <div className="chapter-item completed">
         1. 開発環境の概要
        </div>
        <div className="chapter-item completed">
         2. 必要なツールの紹介
        </div>
        <div className="chapter-item completed">
         3. Nodeのインストール
        </div>
        <div className="chapter-item completed">
         4. Gitの設定
        </div>
        <div className="chapter-item completed">
         5. エディタの設定
        </div>
        <div className="chapter-item completed">
         6. WordPressのインストール
        </div>
        <div className="chapter-item completed">
         7. テーマフォルダの作成
        </div>
        <div className="chapter-item active">
         8. Local環境の設定
        </div>
        <div className="chapter-item">
         9. デバッグ環境の構築
        </div>
        <div className="chapter-item">
         10. バージョン管理の設定
        </div>
        <div className="chapter-item">
         11. 開発ワークフローの確立
        </div>
        <div className="chapter-item">
         12. まとめと次のステップ
        </div>
       </div>
      </div>
     </div>
  )
}

export default page
