import LoginForm from "../_component/LoginForm"

function LoginPage() {

  return (
    <>
      <div style={{ maxWidth: "400px", margin: "var(--spacing-xl) auto" }}>
       <h2 className='page-heading-title text-center'>ログイン</h2>
       <div className="card">
        <LoginForm />
       </div>
      </div>
    </>
  )
}

export default LoginPage
