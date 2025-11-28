"use client"

import { PasswordResult, updatePassword } from "@/app/_actions/profile"
import FormErrorMessage from "@/app/_components/FormErrorMessage"
import { useActionState } from "react"

const initialState: PasswordResult = {
  status: "",
  message: "",
}

function PasswordForm() {
    const [state, formAction] = useActionState(updatePassword, initialState)

  return (
    <form action={formAction}>
        <div className="form-group"><label htmlFor="current-pass">現在のパスワード</label>
        <input 
        name="current-password"
        type="password" id="current-password" className="form-control" required />
        </div>
        <div className="form-group"><label htmlFor="new-pass">新しいパスワード</label>
        <input 
        name="new-password"
        type="password" id="new-password" className="form-control" required />
        </div>
        <div className="form-group"><label htmlFor="confirm-pass">パスワード確認</label>
        <input
        name="confirm-password"
        type="password" id="confirm-password" className="form-control" required />

        {state.status === "success" && (
        <p className="text-[var(--color-success)] mb-[1rem]">
          {state.message}
        </p>
        )}

        {state.status === "error" && (
            <FormErrorMessage message={state.message} />
        )}

        </div><button type="submit" className="btn btn-primary">変更する</button>
    </form>
  )
}

export default PasswordForm
