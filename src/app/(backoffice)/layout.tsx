'use client'

import Header from '@/components/backoffice/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
