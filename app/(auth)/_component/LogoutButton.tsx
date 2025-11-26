"use client"
import { logout } from '@/app/_actions/auth'

function LogoutButton() {
  const handleLogout = async () => {
    await logout()
  }

  return (
    <button 
      onClick={handleLogout}
      className="text-[var(--color-white)] hover:opacity-80 transition-opacity"
    >
      ログアウト
    </button>
  )
}

export default LogoutButton