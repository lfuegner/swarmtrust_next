import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/Header.module.scss'


export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.container2}>
                    <div className={styles.conatiner3}>
                        <Link href = "/" className={styles.logo}>
                            {/* <Image
                            src="/Swarmtrustbanner.svg" 
                            alt=" Swarmtrust Logo"
                            width={200}
                            height={80}

                            /> */}
                            Home
                        </Link>
                        <div>
                            <ul className={styles.list}>
                                <li>
                                    <Link href = "/watch-out-together" className={styles.link}>Watch Out Together</Link>
                                </li>
                                <li>
                                    <Link href = "/certification" className={styles.link}>Certification</Link>
                                </li>
                                <li>
                                    <Link href = "/about" className={styles.link}>About</Link>
                                </li>
                                <li>
                                    <Link href = "/privacy" className={styles.link}>Privacy</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <button className={styles.hamburger}>
                        <span className={styles.bar}>
                            
                        </span>
                    </button>
                </div>
            </div>

        </header>
    )
}

