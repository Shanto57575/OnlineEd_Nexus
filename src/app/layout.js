import Navbar from '@/Components/Shared/Navbar/Navbar'
import './globals.css'
import { Saira } from 'next/font/google'
import Footer from '@/Components/Shared/Footer/Footer'

const inter = Saira({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-3/4 mx-auto'>
          <Navbar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
