import Link from 'next/link'
import { ReactNode } from 'react'

export default function HeaderLink({
  pathname,
  href,
  name,
  children,
}: {
  pathname: string
  href: string
  name: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className={`${pathname === href ? 'text-secondary' : 'text-dark'} hover:text-primary`}
    >
      {children}
      {name}
    </Link>
  )
}
