import Link from "next/link"

function Header() {
  return (
    <div className="navbar">
        <div className="logo">
            <Link href="/">WPテーマ講座</Link>
        </div>
        { process.env.LOGIN_STATUS  ? (
        <>
            <ul className="nav-links">
                <li><Link href="/guide">講座案内</Link></li>
                <li><Link href="/courses">講座一覧</Link></li>
                <li><Link href="/dashboard">マイページ</Link></li>
            </ul>
            <Link href="/profile" className="user-avatar"><span>田中 花子さん</span>
                <div className="avatar">
                田
                </div>
            </Link>
        </>
        ) : (
            <>
            <div className="hero-actions">
                <Link href="/login" className="btn btn-ghost" id="cta-secondary">ログイン</Link>
                <Link href="/signup" className="btn btn-primary" id="cta-primary">会員登録</Link>
            </div>
            </>

        )}

    </div>
  )
}

export default Header
