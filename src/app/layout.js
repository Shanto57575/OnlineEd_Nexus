import Navbar from '@/Components/Shared/Navbar/Navbar'
import './globals.css'
import { Saira } from 'next/font/google'
import Footer from '@/Components/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Provider from '@/Context/ProviderSession/Provider';

const inter = Saira({ subsets: ['latin'] })

export const metadata = {
  title: 'Ed_Nexus',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <Provider>
            <main className=''>
              {children}
              <ToastContainer />
            </main>
          </Provider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
