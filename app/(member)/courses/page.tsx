import React from 'react'

function page() {
  return (
    <>
      <h1 className='page-heading-title'>コース一覧</h1>
      <div className="category-grid">
       <div className="card -hover category-tile">
        <div className="category-icon">
         🏗️
        </div>
        <h3>基礎・環境構築</h3>
        <p>開発環境の構築とWordPressの基礎</p>
        <div style={{ marginTop: 'var(--spacing-sm)' }} ><span className="course-count">8講座</span>
        </div>
       </div>
       <div className="card -hover category-tile">
        <div className="category-icon">
         🎨
        </div>
        <h3>デザイン・UI</h3>
        <p>テーマデザインとユーザーインターフェース</p>
        <div style={{ marginTop: 'var(--spacing-sm)' }}><span className="course-count">12講座</span>
        </div>
       </div>
       <div className="card -hover category-tile">
        <div className="category-icon">
         ⚙️
        </div>
        <h3>機能開発</h3>
        <p>カスタム機能とプラグイン連携</p>
        <div style={{ marginTop: 'var(--spacing-sm)' }}><span className="course-count">15講座</span>
        </div>
       </div>
       <div className="card -hover category-tile">
        <div className="category-icon">
         💰
        </div>
        <h3>販売・マーケティング</h3>
        <p>テーマの販売戦略とマーケティング</p>
        <div style={{ marginTop: 'var(--spacing-sm)' }}><span className="course-count">6講座</span>
        </div>
       </div>
      </div>
    </>
  )
}

export default page
