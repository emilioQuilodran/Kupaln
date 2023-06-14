/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import styles from '../styles/header.module.scss'
import Link from "next/link";

const Header = () => {
    return(
        <header className={styles.header}>
            <div>
                <Link href={{
                    pathname: '/',
                }}>
                    <h1>Küpaln</h1>
                    <h5>Comercio exterior</h5>
                </Link>
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
                            <Link href={{
                                pathname: '/about-us',
                            }}>
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link href={{
                                pathname: '/features',
                            }}>
                                Servicios
                            </Link>
                        </li>
                        {
                            /**
                             * 
                             */
                        }
                        <li>
                            <Link href="#subscribeForm">
                                Contactanos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;