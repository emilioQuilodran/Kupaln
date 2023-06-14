import styles from '@/app/page.module.scss'
import utils from "../../app/layout.module.scss"
import Head from 'next/head'

const Features = ({children}) => {
    return(
        <>
            <Head>
                <html lang='es' className={`${utils.body}`} />
                <title>Kupaln: servicios</title>
            </Head>
            <div  className={utils.noMargin}>
                <h1>Features page</h1>
                <div>{children}</div>
            </div>
        </>
    )
}

export default Features;