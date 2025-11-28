import SignupForm from '../_component/SignupForm'

function SignUpPage() {
  return (
    <>
    <div style={{maxWidth: '400px', margin: 'var(--spacing-xl) auto'}}>
       <h2 className='page-heading-title text-center'>会員登録</h2>
       <div className="card">
        <SignupForm />
       </div>
      </div>
    </>
  )
}

export default SignUpPage
