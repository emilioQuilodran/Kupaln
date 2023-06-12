import './globals.css'
import { Inter } from 'next/font/google'
import useSWR from 'swr'

const inter = Inter({ subsets: ['latin'] })

 function RootLayout({ children }) {
  const { data, error } = useSWR('/api/navigation', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout