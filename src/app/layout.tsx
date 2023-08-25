'use client'

import { League_Spartan } from 'next/font/google'
import classnames from 'classnames'

import { usePathname } from 'next/navigation'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css'

const queryClient = new QueryClient()

const leagueSpartan = League_Spartan({ subsets: ['latin'], weight: '700' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentPath = usePathname()

  console.log(currentPath)

  return (
    <html lang="en">
      <body className={classnames(leagueSpartan.className)}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </body>
    </html>
  )
}
