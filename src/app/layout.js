
import utils from './layout.module.scss'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

 function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Kupaln: comercio exterior</title>
        <meta name="robots" content="all" />
        <meta name='description' content='Ideal para Despachantes de Aduana, Agencias de Cargas, Compañias aéreas' />
      </head>
      <body className={`${inter.className} ${utils.body}`}>{children}</body>
    </html>
  )
}

export default RootLayout