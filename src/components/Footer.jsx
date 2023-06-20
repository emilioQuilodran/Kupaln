import Image from 'next/image'
import styles from '../app/page.module.scss'
import utils from '../styles/utils.module.css'

const Form = () => {
    return(
        <footer className={styles.footer}>
          <div>
            <h3>Küpaln</h3>  
            <article className={styles.sitemap}>
              <div className={styles.location}>
                <span className={styles.sitemapIconLocation}></span>
                <p>Comercio xx123, Virrrey del Pino, la Matanza, Buenos Aires</p>
              </div>
              <div>
                <ul className={utils.marginTopS}>
                  <li className={utils.displayF}>
                    <span className={styles.sitemapIconPhone}></span>
                    <p className={utils.marginLeftS}>+1-543-123-4567</p>
                  </li>
                  <li className={utils.displayF}>
                    <span className={styles.sitemapIconEmail}></span>
                    <p className={utils.marginLeftS}>example@fylo.com</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={utils.marginTopS}>
                  <li>
                    <p>Sobre Nosotros</p>
                  </li>
                  <li>
                    <p>Servicios</p>
                  </li>
                  <li>
                    <p>Blog</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={utils.marginTopS}>
                  <li>
                    <p>Contactanos</p>
                  </li>
                  <li>
                    <p>Terminos y Condiciones</p>
                  </li>
                </ul>
              </div>
              <div className={styles.networks}>
                <ul>
                  <li>
                    <Image
                      className={styles.instagramIcon} 
                      priority
                      src="/images/instagram.svg"
                      alt="instagram"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image 
                      src="/images/tweet.svg"
                      alt="tweeter icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image 
                      src="/images/face.svg"
                      alt="facebook icon"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </footer>
    )
}

export default Form;