import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/main/Navbar'
import StarsCanvas from './component/main/SarbackGroung'
import Footers from './component/main/Footers'
import Navbar2 from './component/main/Navbar2'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hafiz Ali Portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
