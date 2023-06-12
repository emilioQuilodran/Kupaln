import styles from '../app/page.module.css'
import '../app/globals.css'
import Head from 'next/head';
import Header from './Header';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const name = 'Your Name';
const Layout = ({children, home }) => {
    return(
        <>
            <Head>
                <body className={inter.className} />
            </Head>
            <div className={styles.container}>
                <Header></Header>
                {children}
            </div>
        </>
    )
}

export default Layout;