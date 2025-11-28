import { createClient } from "@/app/_libs/supabase/server"
import ProfileForm from "./_components/ProfileForm"

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
        <form>
         <div className="form-group"><label htmlFor="current-pass">現在のパスワード</label>
         <input type="password" id="current-pass" className="form-control" required />
         </div>
         <div className="form-group"><label htmlFor="new-pass">新しいパスワード</label>
         <input type="password" id="new-pass" className="form-control" required />
         </div>
         <div className="form-group"><label htmlFor="confirm-pass">パスワード確認</label>
         <input type="password" id="confirm-pass" className="form-control" required />
         </div><button type="submit" className="btn btn-primary">変更する</button>
        </form>
       </div>
      </div>   
    </>
  )
}

export default ProfilePage
