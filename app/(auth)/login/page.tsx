import React from 'react'

function page() {
  return (
    <>
      <div style={{ maxWidth: "400px", margin: "var(--spacing-xl) auto" }}>
       <h2 className='page-heading-title text-center'>ログイン</h2>
       <div className="card">
        <form data-target="handleLogin(event)">
         <div className="form-group"><label htmlFor="email">メールアドレス</label> 
            <input type="email" id="email" className="form-control" required />
         </div>
         <div className="form-group"><label htmlFor="password">パスワード</label>
         <input type="password" id="password" className="form-control" required />
         </div><button type="submit" className="btn btn-primary w-[100%] mb-[var(--spacing-sm)]">ログイン</button>
         <p className="text-center"><a href="/signup" className="text-[var(--color-accent)]">会員登録はこちら</a></p>
        </form>
       </div>
      </div>
    </>
  )
}

export default page
