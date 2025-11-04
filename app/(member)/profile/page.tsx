"use client"
function page() {
  return (
    <>
    <h1 className="page-heading-title">プロフィール設定</h1>
      <div className="grid-2">
       <div className="card">
        <h3 className='page-heading__3'>基本情報</h3>
        <form>
         <div className="form-group"><label htmlFor="name">表示名</label>
            <input type="text" id="name" className="form-control" defaultValue="田中太郎" />
         </div>
         <div className="form-group"><label htmlFor="profile-email">メールアドレス</label>
            <input type="email" id="profile-email" className="form-control" defaultValue="tanaka@example.com" readOnly style={{"background": "var(--color-background)"}} />
         </div><button type="submit" className="btn btn-primary">更新する</button>
        </form>
       </div>
       <div className="card">
        <h3 className='page-heading__3' >パスワード変更</h3>
        <form>
         <div className="form-group"><label htmlFor="current-pass">現在のパスワード</label>
         <input type="password" id="current-pass" className="form-control" required />
         </div>
         <div className="form-group"><label htmlFor="new-pass">新しいパスワード</label>
         <input type="password" id="new-pass" className="form-control" required />
         </div>
         <div className="form-group"><label htmlFor="confirm-pass">パスワード確認</label>
         <input type="password" id="confirm-pass" className="form-control" required />
         </div><button type="submit" className="btn btn-primary">変更する</button>
        </form>
       </div>
      </div>
      <div className="text-center" style={{"marginTop": "var(--spacing-lg)"}}>
        <button className="btn btn-secondary">ログアウト</button>
      </div>      
    </>
  )
}

export default page
