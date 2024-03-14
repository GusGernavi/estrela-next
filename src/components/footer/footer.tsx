'use client'

import { AuthContext } from '@/app/(site)/provider/AuthProvider'
import { GoogleLogo } from '@phosphor-icons/react/dist/ssr/GoogleLogo'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

export default function Footer() {
  const { signIn, user } = useContext(AuthContext)

  // function handleSign() {
  //   signIn()
  // }

  return (
    <div className="grid grid-cols-2">
      <div className="m-5 flex flex-col items-center gap-4 align-middle">
        <Link href="/">Home</Link>
        <Link href="/raios-luz">Raios de Luz</Link>
        <Link href="/albuns">Albuns</Link>
        <Link href="/contato">Contato</Link>
      </div>
      <div className="flex w-full items-center justify-end pr-36">
        {user && user.photoURL ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <Image
              src={user.photoURL}
              alt="Foto usuário"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-semibold text-secondary">
              {user.displayName}
            </span>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              className="flex items-center gap-4 hover:text-primary"
              type="button"
              onClick={signIn}
            >
              <GoogleLogo size={40} weight="bold" className="animate-puls" />
              <span className="font-semibold">Login</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
