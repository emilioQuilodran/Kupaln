"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import styles from '../styles/header.module.scss'
import Link from "next/link";

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    return(
        <header className={styles.header}>
            <div>
                <Link href={"/"}>
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
                            <Link href={"/about-us"}>
                                Sobre nosotros
                            </Link>
                        </li>
                        <li onClick={() => router.push('/features')}>
                            Servicios
                        </li>
                        {
                            /**
                             * 
                             */
                        }
                        <li>
                            <Link href={"#subscribeForm"}>
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