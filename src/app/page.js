import Image from 'next/image'
import styles from '../app/page.module.scss'
import utils from '../styles/utils.module.css'
import Layout from '@/components/layout'
import Form from '@/components/form'
import Footer from '@/components/Footer'
const name = 'Kupaln';

const Home = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.hero}>
          <Image 
              src="/images/illustration-intro.png"
              alt="Fylo"
              width={300}
              height={255}
          />
          <h2 className={styles.heroTitle}>Servicios integrales para el comercio exterior.</h2>
          <p>Somos un equipo de trabajo que tiene como mision ofrecer soluciones integrales a nuestros clientes del comercio exterior. Todo lo que necesitas en un solo proveedor.</p>
          <a className={`${styles.btn} ${utils.greyShadow}`} href='#subscribeForm'>Comenzar</a>
        </section>
        <section className={styles.features}>
          <h2>Ideal para Despachantes de Aduana, Agencias de Cargas, Compañias aéreas.</h2>
          <div>
            <article>
              <Image 
                  src="/images/icon-access-anywhere.svg"
                  alt="icon access anywhere"
                  width={66}
                  height={60}
              />
              <h4>Servicios Operativos</h4>
              <p>Nuestro equipo operativo se va a ocupar de todos los detalles, y nuestra atención personalizada va a lograr que esta experiencia trabajando sea única. (Despachos de aduana, Manifiestos de importación y Exportación, Tránsitos, Expedientes, etc.) Referencias a disposición.</p>
            </article>
            <article>
              <Image 
                  src="/images/icon-security.svg"
                  alt="icon-security"
                  width={50}
                  height={64}
              />
              <h4>Paquetería Internacional</h4>
              <p>¿Faltó adjuntar un certificado a la HAWB? ¿Tenés que enviar un documento a cualquier parte del mundo de manera urgente?. Contá con nosotros para traerte una solución.</p>
            </article>
            <article>
              <Image 
                  src="/images/icon-any-file.svg"
                  alt="icon store"
                  width={70}
                  height={49}
              />
              <h4>Marketing y Diseño</h4>
              <p>Si estas en el rubro y buscás insertarte en las nuevas tecnologías, potenciar tu negocio a través de las redes, crear o remodelar tu pagina web o cambios de identidad visual para comenzar, con nuestra red de amigos una vez más podremos brindarte una solución.</p>
            </article>
          </div>
          <h2>Sos una Pyme o buscas emprender en el rubro ? También pensamos en vos.</h2>
          <div>
            <article>
              <Image 
                  src="/images/icon-access-anywhere.svg"
                  alt="icon access anywhere"
                  width={66}
                  height={60}
              />
              <h4>Asesoria Aduanera</h4>
              <p>¿Queres saber como exportar o importar a cualquier parte del mundo?. No dudes en contactarte , te brindaremos una atención personalizada hasta que puedas concretar tu importacion o tu envío.</p>
            </article>
            <article>
              <Image 
                  src="/images/icon-security.svg"
                  alt="icon-security"
                  width={50}
                  height={64}
              />
              <h4>Mudanzas Internacionales </h4>
              <p>Si te mudas, o te vas al exterior por trabajo, organizamos tu mudanza internacional logística y aduaneramente para que no tengas ningún problema.</p>
            </article>
            <article>
              <Image 
                  src="/images/icon-any-file.svg"
                  alt="icon store"
                  width={70}
                  height={49}
              />
              <h4>Mascotas al exterior</h4>
              <p>Si te llevás a tu mascota al exterior, confiar esta tarea en profesionales influye directamente en que la experiencia de tu compañerit@ de vida sea genial o un recuerdo digno de olvido. Ponemos a tu disposición a los mejores en la materia. </p>
            </article>
          </div>
        </section>
        {
          /**
           * <section className={styles.testimonials}>
              <div>
                <article className={`${styles.slot} ${utils.greyShadow}`}>
                  <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                  <div className={styles.slotContent}>
                    <Image 
                        src="/images/profile-1.jpg"
                        alt="icon profile"
                        width={25}
                        height={25}
                    />
                    <div>
                      <h5>Satish Patel</h5>
                      <p>Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </article>
                <article className={`${styles.slot} ${utils.greyShadow}`}>
                  <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                  <div className={styles.slotContent}>
                    <Image 
                        src="/images/profile-2.jpg"
                        alt="icon profile"
                        width={25}
                        height={25}
                    />
                    <div>
                      <h5>Bruce McKenzie</h5>
                      <p>Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </article>
                <article className={`${styles.slot} ${utils.greyShadow}`}>
                  <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                  <div className={styles.slotContent}>
                    <Image 
                        src="/images/profile-3.jpg"
                        alt="icon profile"
                        width={25}
                        height={25}
                    />
                    <div>
                      <h5>Iva Boyd</h5>
                      <p>Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          */
        }
        <Form />
        <Footer />
      </main>
    </Layout>
    /**
     * <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
     */
  )
}

export default Home;