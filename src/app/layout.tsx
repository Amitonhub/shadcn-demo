import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from './context/store'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='mx-7 overflow-hidden'>
      <body className={`${inter.className}`}>
        <GlobalContextProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster/>
          </ThemeProvider>
        </GlobalContextProvider>
        </body>
    </html>
  )
}
