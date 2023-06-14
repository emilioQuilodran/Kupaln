
import utils from './layout.module.scss'

 function RootLayout({ children }) {
  return (
    /*
    <html lang="es">
      <head>
        <title>Kupaln: comercio exterior</title>
        <meta name="robots" content="all" />
        <meta name='description' content='Ideal para Despachantes de Aduana, Agencias de Cargas, Compañias aéreas' />
      </head>
    
    </html>
    */
   <html lang='es' className={`${utils.body}`}>
      <head>
        <title>Kupaln: comercio exterior</title>
      </head>
      <div className={`${utils.noMargin}`}>{children}</div>
   </html>
  )
}

export default RootLayout