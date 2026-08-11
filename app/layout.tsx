import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Manrope, Nunito } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext'],
  variable: '--font-jakarta',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
})

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Study Space N',
  description: 'Умное пространство для твоего обучения',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} ${manrope.variable} ${nunito.variable}`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}