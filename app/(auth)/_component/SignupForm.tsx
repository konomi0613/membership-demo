"use client"
import { AuthResult, signup } from '@/app/_actions/auth';
import FormErrorMessage from '@/app/_components/FormErrorMessage';
import Link from 'next/link'
import { useActionState } from 'react';

const initialState: AuthResult = {
  status: "",
  message: "",
}

function SignupForm() {
  const [ state, formAction ] = useActionState(signup, initialState);
  const formData = state.formData || {};

    // 成功時はフォームを非表示
  if (state.status === "success") {
    return (
      <div style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
        <div style={{ fontSize: '48px', marginBottom: 'var(--spacing-md)' }}>
          ✉️
        </div>
        <h3 className="page-heading__3">確認メールを送信しました</h3>
        <p style={{ color: 'var(--color-medium-gray)' }}>
          ご登録いただいたメールアドレスに確認メールを送信しました。<br />
          メール内のリンクをクリックして登録を完了してください。
        </p>
        <p style={{ fontSize: '14px', color: 'var(--color-medium-gray)', marginTop: 'var(--spacing-sm)' }}>
          ※メールが届かない場合は、迷惑メールフォルダをご確認ください
        </p>
      </div>
    )
  }

  return (
    <form action={formAction}>
      <div className="form-group"><label htmlFor="signup-name">お名前</label>
      <input 
      required
      name="signup-name"
      defaultValue={formData['signup-name']}
      type="text" id="signup-name" className="form-control" placeholder="田中太郎" />
      </div>
      <div className="form-group"><label htmlFor="signup-email">メールアドレス</label>
      <input 
      required
      name="signup-email"
      defaultValue={formData['signup-email']}
      type="email" id="signup-email" className="form-control" placeholder="example@email.com" />
      </div>
      <div className="form-group"><label htmlFor="signup-password">パスワード</label>
      <input 
      required
      name="signup-password"
      pattern="(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,}"
      maxLength={30}
      defaultValue={formData['signup-password']}
      type="password" id="signup-password" className="form-control" placeholder="英数字8文字以上で入力してください"  />
      </div>
      <div className="form-group"><label htmlFor="signup-password-confirm">パスワード確認</label>
      <input 
      required
      name="signup-password-confirm"
      pattern="(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,}"
      maxLength={30}
      defaultValue={formData['signup-password-confirm']}
      type="password" id="signup-password-confirm" className="form-control" placeholder="パスワードを再入力してください" />
      </div>
      <div className="form-group">
        <label style={{display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-xs)', cursor: 'pointer'}}>
        <input
        required
        name="terms-agreement"
        type="checkbox" id="terms-agreement" style={{marginTop: '4px'}} />
        <span style={{fontSize: '14px', lineHeight: '1.5'}}>
            <Link href="#" style={{color: 'var(--color-accent)', textDecoration: 'underline'}}>利用規約</Link>および<Link href="#" style={{color: 'var(--color-accent)', textDecoration: 'underline'}}>プライバシーポリシー</Link>に同意します
        </span>
        </label>
      </div>
      { state.status === "error" && <FormErrorMessage message={state.message} />}
      <button type="submit" className="btn btn-primary" style={{width: '100%', marginBottom: 'var(--spacing-sm)'}}>会員登録</button>
      <p style={{textAlign: 'center'}}>すでにアカウントをお持ちの方は<br/><Link href="/login" style={{color: 'var(--color-accent)'}}>こちらからログイン</Link></p>
    </form>
  )
}

export default SignupForm
