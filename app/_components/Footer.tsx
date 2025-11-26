import Link from 'next/link'
import LogoutButton from '../(auth)/_component/LogoutButton'
import { createClient } from '../_libs/supabase/server'

async function Footer() {
const supabase = await createClient()
const { data: { user } } = await supabase.auth.getUser()
  
  return (
    <footer className="footer">
        <div className="footer-links">
          <Link href="#">特定商取引法</Link>
          <Link href="#">プライバシーポリシー</Link>
          <Link href="#">利用規約</Link>
          <Link href="/contact">お問い合わせ</Link>
          { user ? <LogoutButton /> : ""}
        </div>
        <p>© 2025 WordPressテーマ開発講座</p>
    </footer>
  )
}

export default Footer
