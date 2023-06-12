import styles from '../app/page.module.css'
import Layout from '@/components/layout';
import utils from '../styles/utils.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/form'
import Footer from '@/components/Footer'
const Teams = ({props}) => {
    return(
        <Layout>
            <Head>
                <title>Kupaln: comercio exterior</title>
            </Head>
            <section className={styles.teams}>
                <div>
                    <Image
                        className={styles.teamsImage} 
                        src="/images/illustration-stay-productive.png"
                        alt="stay productive"
                        width={300}
                        height={230}
                    />
                    <div className={styles.teamsContent}>
                        <h2>Nuestro equipo</h2>
                        <h3>Segunda generación en el rubro</h3>
                        <p>Decidimos continuar con el legado de nuetro padre quien fue Despachante de Aduana y Agente de carga durante mas de 30 años,
                            por lo que contamos con la experiencia y los contactos necesarios para poder solucionar junto a ustedes cualquier tipo de desafio.</p>
                        <p>Sumando a esa experiencia un fuerte sentido de responsabilidad con nuestros clientes,
                            la determinación de concretar rápido y bien los emprendimientos que nos propongan; más un
                            correcto uso de las nuevas tecnologías que la globalización e internet nos aportan, desarrollamos 
                            la combinación adecuada para ser su proveedor de confianza y acompañarlos a seguir creciendo en este rubro fantástico. </p>
                        <a className={styles.link} href=''>
                            See how Fylo works
                            <Image 
                                src="/images/icon-arrow.svg"
                                alt="arrow img"
                                width={14}
                                height={14}
                            />
                        </a>
                    </div>
                </div>
            </section>
            <Form />
            <Footer />
        </Layout>
    )
}

export default Teams;