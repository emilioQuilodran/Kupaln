import styles from '@/app/page.module.scss'
import utils from "@/app/layout.module.scss"
import Head from 'next/head'
import commons from '@/styles/utils.module.scss'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Form from '@/components/form'

const Features = ({children}) => {
    let url = `https://wa.me/541161448411?text=Hola,%20me%20gustaria%20hacer%20una%20consulta%20sobre...`
    return(
        <>
            <Head>
                <html lang='es' className={`${utils.body}`} />
                <title>Kupaln: que ofrecemos?</title>
            </Head>
            <main className={`${styles.main} ${utils.noMargin}`}>
                <section style={{maxWidth: "800px", margin: "0 auto", paddingTop: "4em"}}>
                    <h2>Planes y precios de nuestros servicios digitales</h2>
                    <p>
                        Tenemos planes armados a medida donde se indican los precios de los desarrollos web asociados a cada plan.
                        Podés consultarnos por nuestros modelos, te enviaremos un PDF que incluye los costos de cada plan, tiempo estimado de desarrollo, los servicios incluidos y los adicionales, metodología de trabajo y formas de pago.
                    </p>
                    <p>
                    * Precios expresados en Pesos Argentinos. El precio es final, por única vez. No incluye dominio ni hosting. Los precios publicados son para diseños con plantillas (consultar por diseños a medida). Trabajos en todo el país y en el exterior. 
                    </p>
                </section>
                <section className={styles.features}>
                    <div>
                        <article className={`${styles.card} ${utils.greyShadow}`}>
                            <Image 
                                src="/images/singlePage.svg"
                                alt="basic plan"
                                width={80}
                                height={80}
                            />
                            <h4>Plan Básico</h4>
                            <p>Sitios de una sola página. Son sitios con el fin de tener presencia en internet cuando se dispone de poco material.</p>
                            <p className={`${commons.price}`}>Consular</p>
                        </article>
                        <article className={`${styles.card} ${utils.greyShadow}`}>
                            <Image 
                                src="/images/plan2.svg"
                                alt="standard plan"
                                width={50}
                                height={64}
                            />
                            <h4>Plan Estándar</h4>
                            <p>Sitios de hasta 4 / 5 páginas. Mientras más páginas tenga el sitio más contenido incluye y favorece al SEO.</p>
                            <p className={`${commons.price}`}>Consular</p>
                        </article>
                        <article className={`${styles.card} ${utils.greyShadow}`}>
                            <Image 
                                src="/images/webServer.svg"
                                alt="premiun plan"
                                width={70}
                                height={49}
                            />
                            <h4>Plan Premium</h4>
                            <p>Son sitios de hasta 5 o 6 secciones / páginas. Incluye un catálogo que puede contener productos, trabajos, etc.</p>
                            <p className={`${commons.price}`}>Consular</p>
                        </article>
                    </div>
                    <div>
                        <article className={`${styles.card} ${utils.greyShadow}`}>
                            <Image 
                                src="/images/ecommerce.svg"
                                alt="ecommerce"
                                width={70}
                                height={49}
                            />
                            <h4>Plan E-commerce</h4>
                            <p>Son sitios de hasta 7, u 8 secciones / páginas. Incluye catálogo de productos con gestión de pedidos y venta online.</p>
                            <p className={`${commons.price}`}>Consular</p>
                        </article>
                    </div>  
                </section>
            </main>
            {
                /**
                 * <section style={{maxWidth: "800px", margin: "0 auto"}}>
                <h2>Caracteristicas incluidas en todos los planes</h2>
                <ul>
                    <li>
                        <h4>Funcionalidades Básicas</h4>
                        <p>Slider simple, galería, mapa, formulario de contacto, integración con redes sociales.</p>
                    </li>
                    <li>
                        <h4>Diseños Responsivos</h4>
                        <p>Diseños adaptados a todos los dispositivos móviles: notebooks, tablets, celulares, etc.</p>
                    </li>
                    <li>
                        <h4>Páginas Web optimizadas</h4>
                        <p>Trabajamos haciendo foco en la calidad de nuestros entregables. Utilizando mejores practicas para tener la mejor performance en nuestros sitios.</p>
                    </li>
                    <li>
                        <h4>Sitios Autoadministrables</h4>
                        <p>Se puede modificar su contenido de manera sencilla sin necesidad de pagar mantenimiento.</p>
                    </li>
                </ul>
            </section>
                 */
            }
            <div className={styles.whatsapp}>
                <a target='_blank' href={url} className={utils.dartkShadow} style={{borderRadius: '50%'}}>
                    <span className={styles.wpIcon}></span>
                </a>
            </div>
            <Form />
            <Footer />
        </>
    )
}

export default Features;