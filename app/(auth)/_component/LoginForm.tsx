"use client"
import { AuthResult, login } from "@/app/_actions/auth"
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
        {state.message && <p className="mb-[1rem] text-[#DC2626]">{state.message}</p>}
        <button type="submit" className="btn btn-primary w-[100%] mb-[var(--spacing-sm)]">ログイン</button>
        <p className="text-center"><a href="/signup" className="text-[var(--color-accent)]">会員登録はこちら</a></p>
    </form>
  )
}

export default LoginForm
