"use client"
import { AuthResult, login } from "@/app/_actions/auth"
import FormErrorMessage from "@/app/_components/FormErrorMessage";
import SignupModal from "@/app/_components/SignupModal";
import { useActionState } from "react";

const initialState: AuthResult = {
  status: "",
  message: "",
}

function LoginForm() {
    const [ state, formAction ] = useActionState(login, initialState);

  return (
    <form action={formAction} >
        <div className="form-group"><label htmlFor="email">メールアドレス</label> 
        <input 
        type="email"
        id="email"
        name="email"
        className="form-control"
        />
        </div>
        <div className="form-group"><label htmlFor="password">パスワード</label>
        <input 
        type="password"
        id="password"
        name="password"
        className="form-control"
        />
        </div>
        <FormErrorMessage message={state.message} />
        <button type="submit" className="btn btn-primary w-[100%] mb-[var(--spacing-sm)]">ログイン</button>
        <p className="text-center">
          {process.env.NEXT_PUBLIC_DEMO_MODE === "true" ? (
            <SignupModal><button className="text-[var(--color-accent)]" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit' }}>会員登録はこちら</button></SignupModal>
          ) : (
            <a href="/signup" className="text-[var(--color-accent)]">会員登録はこちら</a>
          )}
        </p>
    </form>
  )
}

export default LoginForm
