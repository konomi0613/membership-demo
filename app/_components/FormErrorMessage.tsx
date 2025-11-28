type Props = {
  message: string
}

function FormErrorMessage({ message }: Props) {
  if (!message) return null

  return (
    <p className={`mb-[1rem] text-[#DC2626]`}>
      {message}
    </p>
  )
}

export default FormErrorMessage