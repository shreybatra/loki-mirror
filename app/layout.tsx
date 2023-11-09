import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './blocks.css'
import './text.css'
import './components.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmocloud',
  description: 'Backend as a service',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='ellipse-1'></div>
        <div className='ellipse-2'></div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
