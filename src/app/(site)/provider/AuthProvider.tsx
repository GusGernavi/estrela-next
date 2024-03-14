import { auth } from '@/app/config/configFirebase'
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth'
import { ReactNode, createContext, useState } from 'react'
export type AuthType = {
  user?: User | null
  signIn: () => void
}

export const AuthContext = createContext({} as AuthType)

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  function signIn() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user)
    })
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
