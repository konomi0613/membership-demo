import ContactForm from '@/app/_components/ContactForm'

function ContactPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h2 className='page-heading-title text-center'>お問い合わせ</h2>
        <p style={{ color: 'var(--color-medium-gray)', marginBottom: 'var(--spacing-md)' }}>
          講座内容に関するご質問・その他ご不明な点がございましたら、
          下記フォームよりお問い合わせください。通常24時間以内にご返信いたします。
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage