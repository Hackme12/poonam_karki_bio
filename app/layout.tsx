import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Poonam Karki - Research Specialist & Data Scientist',
  description: 'Research Specialist at Lincoln University specializing in soil health, climate-resilient agriculture, and data science.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}