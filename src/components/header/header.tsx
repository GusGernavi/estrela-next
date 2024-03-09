'use client'
import { usePathname } from 'next/navigation'
import HeaderLink from './header-link'

export default function Header() {
  const pathname = usePathname()

  return (
    <div className="fixed z-10 w-full bg-transparent">
      <nav className="flex justify-center gap-20 bg-transparent py-3">
        <HeaderLink href="/" pathname={pathname} name="Home" />
        <HeaderLink href="/raios-luz" pathname={pathname} name="Raios de Luz" />
        <HeaderLink href="/albuns" pathname={pathname} name="Albuns" />
        <HeaderLink href="/contato" pathname={pathname} name="Contato" />
      </nav>
    </div>
  )
}
