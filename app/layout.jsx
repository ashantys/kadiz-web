import '../styles/globals.css';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kadiz',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className='container-fluid'>
          

          {children}
        </div>
      </body>
    </html>
  )
}
