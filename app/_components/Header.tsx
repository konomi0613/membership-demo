import Link from "next/link"
import { createClient } from "../_libs/supabase/server"
import SignupModal from "./SignupModal"

async function Header() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    const name = user?.user_metadata?.name || ''

  return (
    <div className="navbar">
        <div className="logo">
            <Link href={user ? "/mypage" : "/"}>WPテーマ講座</Link>
        </div>
        { user  ? (
        <>
            <ul className="nav-links">
                <li><Link href="/guide">講座案内</Link></li>
                <li><Link href="/courses">講座一覧</Link></li>
                <li><Link href="/mypage">マイページ</Link></li>
            </ul>
            <Link href="/profile" className="user-avatar"><span>{name}さん</span>
                <div className="avatar">
                田
                </div>
            </Link>
        </>
        ) : (
            <>
            <div className="hero-actions">
                <Link href="/login" className="btn btn-ghost mr-[1rem]" id="cta-secondary">ログイン</Link>
                {process.env.NEXT_PUBLIC_DEMO_MODE === "true" ? (
                  <SignupModal><button className="btn btn-primary" id="cta-primary">会員登録</button></SignupModal>
                ) : (
                  <Link href="/signup" className="btn btn-primary" id="cta-primary">会員登録</Link>
                )}
            </div>
            </>

        )}

    </div>
  )
}

export default Header
