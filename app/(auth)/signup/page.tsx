import Link from 'next/link'

function page() {
  return (
    <>
    <div style={{maxWidth: '400px', margin: 'var(--spacing-xl) auto'}}>
       <h2 className='page-heading-title text-center'>会員登録</h2>
       <div className="card">
        <form>
         <div className="form-group"><label htmlFor="signup-name">お名前</label>
         <input type="text" id="signup-name" className="form-control" placeholder="田中太郎" required />
         </div>
         <div className="form-group"><label htmlFor="signup-email">メールアドレス</label>
         <input type="email" id="signup-email" className="form-control" placeholder="example@email.com" required />
         </div>
         <div className="form-group"><label htmlFor="signup-password">パスワード</label>
         <input type="password" id="signup-password" className="form-control" placeholder="8文字以上で入力してください" required minLength={8} />
         </div>
         <div className="form-group"><label htmlFor="signup-password-confirm">パスワード確認</label>
         <input type="password" id="signup-password-confirm" className="form-control" placeholder="パスワードを再入力してください" required />
         </div>
         <div className="form-group">
            <label style={{display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-xs)', cursor: 'pointer'}}>
            <input type="checkbox" id="terms-agreement" required style={{marginTop: '4px'}} />
            <span style={{fontSize: '14px', lineHeight: '1.5'}}>
                <Link href="#" style={{color: 'var(--color-accent)', textDecoration: 'underline'}}>利用規約</Link>および<Link href="#" style={{color: 'var(--color-accent)', textDecoration: 'underline'}}>プライバシーポリシー</Link>に同意します
            </span>
            </label>
         </div>
         <button type="submit" className="btn btn-primary" style={{width: '100%', marginBottom: 'var(--spacing-sm)'}}>会員登録</button>
         <p style={{textAlign: 'center'}}>すでにアカウントをお持ちの方は<br/><a href="#" style={{color: 'var(--color-accent)'}}>こちらからログイン</a></p>
        </form>
       </div>
      </div>
    </>
  )
}

export default page
