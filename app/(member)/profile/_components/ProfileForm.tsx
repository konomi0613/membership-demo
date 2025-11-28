"use client"
import { ProfileResult, updateProfile } from "@/app/_actions/profile"
import FormErrorMessage from "@/app/_components/FormErrorMessage"
import { useActionState } from "react"

type Props = {
  currentName: string
  email: string
}

const initialState: ProfileResult = {
  status: "",
  message: "",
}

function ProfileForm( { currentName, email }: Props ) {
    const [state, formAction] = useActionState(updateProfile, initialState)

  return (
    <form action={formAction}>
        <div className="form-group"><label htmlFor="name">表示名</label>
        <input 
        name="profile-name"
        type="text" id="name" className="form-control" defaultValue={currentName} />
        </div>
        <div className="form-group"><label htmlFor="profile-email">メールアドレス</label>
        <input 
        type="email" id="profile-email" className="form-control" defaultValue={email} readOnly style={{"background": "var(--color-background)"}} />
        
        {state.status === "success" && (
        <p className="text-[var(--color-success)] mb-[1rem]">
          {state.message}
        </p>
        )}

        {state.status === "error" && (
            <FormErrorMessage message={state.message} />
        )}
        </div><button type="submit" className="btn btn-primary">更新する</button>
    </form>
  )
}

export default ProfileForm
