import { redirect } from "next/navigation";
import { createClient } from "../_libs/supabase/server";

// # 会員用レイアウト
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // 認証チェック
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // 未ログインの場合はログインページへリダイレクト
  if (!user) {
    redirect('/login')
  }
  return (
    <div className="page-container">
      {children}
    </div>
  );
}
