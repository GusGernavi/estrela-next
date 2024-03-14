'use client'

import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import '../globals.css'
import AuthProvider from './provider/AuthProvider'

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
      <AuthProvider>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </AuthProvider>
    </div>
  )
}
