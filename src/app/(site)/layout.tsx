import Header from '@/components/header/header'
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Estrela',
  description: 'Site da Cantora Estrela',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className="bg-fixed"
      style={{
        backgroundImage: '/Capa.jpg',
      }}
    >
      <Header />
      {children}
    </div>
  )
}
