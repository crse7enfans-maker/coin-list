import './globals.css'
import type { Metadata } from 'next'
import { site } from '@/lib/seo'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL('https://your-domain.com'),
  openGraph: { title: site.name, description: site.description, url: 'https://your-domain.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        <main className="container py-6">{children}</main>
      </body>
    </html>
  )
}
