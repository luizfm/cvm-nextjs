'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'

import styles from './styles.module.scss'

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
      <Header />
      <main className={styles['main-content']}>{children}</main>
      {currentPath !== '/login' && <Footer />}
    </>
  )
}
