"use client"
import Link from 'next/link'
import { ActionResult, createContactData } from '../_actions/contact';
import { useActionState } from 'react';

const initialState: ActionResult = {
    status: "",
    message: "",
}

function ContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);
  const formData = state.formData || {};

  if(state.status === "success") {
    return (
        <p>お問い合わせいただきありがとうございます。<br />お返事まで今しばらくお待ちください。</p>
    );
  }
  return (
        <form action={formAction}>
          <div className="form-group">
            <label htmlFor="contact-name">
              お名前 <span style={{ color: '#DC2626' }}>*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="contact-name"
              className="form-control"
              placeholder="田中太郎"
              defaultValue={formData['contact-name']}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">
              メールアドレス <span style={{ color: '#DC2626' }}>*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="contact-email"
              className="form-control"
              placeholder="example@email.com"
              defaultValue={formData['contact-email']}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-category">
              お問い合わせ種別 <span style={{ color: '#DC2626' }}>*</span>
            </label>
            <select 
            id="contact-category"
            name="contact-category"
            className="form-control"
            >
              <option value="">選択してください</option>
              <option value="course" >講座内容について</option>
              <option value="billing">料金・請求について</option>
              <option value="account">アカウントについて</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">
              件名 <span style={{ color: '#DC2626' }}>*</span>
            </label>
            <input
              type="text"
              id="contact-subject"
              name="contact-subject"
              className="form-control"
              placeholder="お問い合わせの件名を入力してください"
              defaultValue={formData['contact-subject']}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">
              お問い合わせ内容 <span style={{ color: '#DC2626' }}>*</span>
            </label>
            <textarea
              id="contact-message"
              name="contact-message"
              className="form-control"
              rows={6}
              placeholder="詳細な内容をご記入ください。エラーメッセージがある場合は、そちらも併せてお知らせください。"
              style={{ resize: 'vertical', minHeight: '120px' }}
              defaultValue={formData['contact-message']}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-xs)', cursor: 'pointer' }}>
              <input 
              type="checkbox"
              id="contact-privacy"
              name="contact-privacy"
            style={{ marginTop: '4px' }} />
              <span style={{ fontSize: '14px', lineHeight: '1.5' }}>
                <Link href="#" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
                  プライバシーポリシー
                </Link>
                に同意の上、送信します
              </span>
            </label>
          </div>
            {state.status === "error" && (
                <p className='text-[#DC2626] mb-[1rem]'>{state.message}</p>
            ) }
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: 'var(--spacing-sm)' }}>
            送信する
          </button>
        </form>
  )
}

export default ContactForm
