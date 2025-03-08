import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './component/main/Navbar';
import StarsCanvas from './component/main/SarbackGroung';
import Footer from './component/main/Footer';
import Chatbot from './components/Chatbot';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hafiz Ali | Portfolio',
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
        <div className="canvas-container">
        <StarsCanvas />
        </div>
        <Navbar />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  )
}
