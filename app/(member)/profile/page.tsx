import { createClient } from "@/app/_libs/supabase/server"
import ProfileForm from "./_components/ProfileForm"
import PasswordForm from "./_components/PasswordForm"

async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const name = user?.user_metadata?.name || ''
  const email = user?.email || ''
  
  return (
    <>
    <h1 className="page-heading-title">プロフィール設定</h1>
      <div className="grid-2">
       <div className="card">
        <h3 className='page-heading__3'>基本情報</h3>
        <ProfileForm
        currentName={name}
        email={email}
        />
       </div>
       <div className="card">
        <h3 className='page-heading__3' >パスワード変更</h3>
        <PasswordForm />
       </div>
      </div>   
    </>
  )
}

export default ProfilePage
