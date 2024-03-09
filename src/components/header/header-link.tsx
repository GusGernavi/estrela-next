import { House } from '@phosphor-icons/react/dist/ssr/House'
import Link from 'next/link'

export default function HeaderLink({
  pathname,
  href,
  name,
}: {
  pathname: string
  href: string
  name: string
}) {
  return (
    <Link
      href={href}
      className={`${pathname === href ? 'text-secondary' : 'text-dark'} hover:text-primary`}
    >
      <House weight="fill" className="mx-auto size-5" />
      {name}
    </Link>
  )
}
