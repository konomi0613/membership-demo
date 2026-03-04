"use client"
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

function SignupModal({ children }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          }}
        />
        <Dialog.Content
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'var(--color-white, #fff)',
            borderRadius: 'var(--border-radius-large, 12px)',
            padding: 'var(--spacing-lg, 32px)',
            width: '90%',
            maxWidth: '440px',
            zIndex: 1001,
          }}
        >
          <Dialog.Title
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 'var(--spacing-md, 16px)',
            }}
          >
            新規会員登録について
          </Dialog.Title>
          <Dialog.Description asChild>
            <div>
              <p style={{ color: 'var(--color-dark-gray, #333)', lineHeight: 1.7, marginBottom: 'var(--spacing-md, 16px)' }}>
                現在、新規会員登録は受け付けておりません。以下のデモアカウントでお試しください。
              </p>
              <div
                style={{
                  backgroundColor: 'var(--color-light-gray, #f9f9f9)',
                  borderRadius: 'var(--border-radius, 8px)',
                  padding: 'var(--spacing-md, 16px)',
                  marginBottom: 'var(--spacing-md, 16px)',
                }}
              >
                <p style={{ fontSize: '14px', color: 'var(--color-medium-gray)', marginBottom: '8px' }}>デモ用ログイン情報</p>
                <p style={{ marginBottom: '4px' }}><strong>メールアドレス：</strong>mucca0804@gmail.com</p>
                <p><strong>パスワード：</strong>demo2025</p>
              </div>
            </div>
          </Dialog.Description>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dialog.Close asChild>
              <Link href="/login" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                ログイン画面へ
              </Link>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button className="btn btn-ghost" style={{ width: '100%' }}>
                閉じる
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SignupModal
