import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-links">
          <Link href="#">特定商取引法</Link>
          <Link href="#">プライバシーポリシー</Link>
          <Link href="#">利用規約</Link>
          <Link href="/contact">お問い合わせ</Link>
        </div>
        <p>© 2025 WordPressテーマ開発講座</p>
    </footer>
  )
}

export default Footer
