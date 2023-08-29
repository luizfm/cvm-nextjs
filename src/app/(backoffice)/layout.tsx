import Header from '@/components/backoffice/header'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userId = cookies().get('userId')

  if (!userId) {
    redirect('/login')
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
