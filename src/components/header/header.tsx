'use client'
import { House, MusicNote, PaperPlaneTilt } from '@phosphor-icons/react'
import { ShootingStar } from '@phosphor-icons/react/dist/ssr/ShootingStar'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import HeaderLink from './header-link'

export default function Header() {
  const pathname = usePathname()
  const [scrolling, setScrolling] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Defina a posição de rolagem na qual deseja aplicar a mudança de estilo
      const scrollThreshold = 60

      if (scrollTop < scrollThreshold) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Limpe o evento de rolagem quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed ${scrolling ? 'bg-transparent' : 'bg-light'} z-10 w-full transition-colors duration-700`}
    >
      <nav className="flex justify-center gap-20 bg-transparent py-3">
        <HeaderLink href="/" pathname={pathname} name="Home">
          <House weight="fill" className={`mx-auto size-5 `} />
        </HeaderLink>
        <HeaderLink href="/raios-luz" pathname={pathname} name="Raios de Luz">
          <ShootingStar weight="fill" className={`mx-auto size-5 `} />
        </HeaderLink>
        <HeaderLink href="/albuns" pathname={pathname} name="Albuns">
          <MusicNote weight="fill" className={`mx-auto size-5 `} />
        </HeaderLink>
        <HeaderLink href="/contato" pathname={pathname} name="Contato">
          <PaperPlaneTilt weight="fill" className={`mx-auto size-5 `} />
        </HeaderLink>
      </nav>
    </div>
  )
}
