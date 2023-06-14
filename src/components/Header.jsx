'use client';
import styles from '../styles/header.module.scss'
import Link from "next/link";

const Header = () => {
    return(
        <header className={styles.header}>
            <div>
                <a href={"/"}>
                    <h1>Küpaln</h1>
                    <h5>Comercio exterior</h5>
                </a>
                {
                    /**
                     * <Image 
                            src="/images/logo.svg"
                            alt="Küpaln"
                            width={80}
                            height={29}
                        />
                     */
                }
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href={"/about-us"}>
                                Sobre nosotros
                            </a>
                        </li>
                        <li>
                            <a href={"/features"}>
                                Servicios
                            </a>
                        </li>
                        {
                            /**
                             * 
                             */
                        }
                        <li>
                            <a href={"#subscribeForm"}>
                                Contactanos
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;