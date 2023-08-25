'use client'

import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentPath = usePathname()

  console.log(currentPath)

  return (
    <>
      <header>teste header</header>
      <main>{children}</main>
      <footer>teste footer</footer>
    </>
  )
}
