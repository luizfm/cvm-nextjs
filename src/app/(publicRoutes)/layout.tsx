import { headers } from 'next/headers'

import Header from '@/components/header'
import Footer from '@/components/footer'

import styles from './styles.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentPath = headers().get('referer') || ''
  return (
    <>
      <Header />
      <main className={styles['main-content']}>{children}</main>
      {!currentPath.includes('/login') && <Footer />}
    </>
  )
}
