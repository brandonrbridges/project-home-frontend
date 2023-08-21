// Types
import type { Metadata } from 'next'

// Next
import localFont from 'next/font/local'

// Styles
import './globals.scss'

// Helpers
import classNames from 'classnames'

// Fonts
import { Inter, Marck_Script } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const marck = Marck_Script({
  subsets: ['latin'],
  variable: '--font-decorative',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Hello Home',
  description: 'Built with NextJS & NestJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, marck.variable)}>
        {children}
        <div id="modal-portal" />
      </body>
    </html>
  )
}
