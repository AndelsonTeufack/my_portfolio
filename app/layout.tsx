import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Andelson Teufack - Full-Stack Developer & IT Solutions Analyst',
  description: 'Professional portfolio of Andelson Teufack, a full-stack developer and IT solutions analyst from Cameroon. Specialized in Java, Python, JavaScript, React, and Spring Boot.',
  keywords: 'Developer, Full-Stack, IT Solutions, Java, Python, JavaScript, React, Spring Boot, Portfolio',
  authors: [{ name: 'Andelson Teufack', url: 'https://andelson.dev' }],
  generator: 'Andelson Teufack',
  // icons: {
  //   icon: [
  //     {
  //       url: '/icon-light-32x32.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '/icon-dark-32x32.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //     {
  //       url: '/favicon.svg',
  //       type: 'image/svg+xml',
  //     },
  //   ],
  //   apple: '/apple-icon.png',
  // },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
