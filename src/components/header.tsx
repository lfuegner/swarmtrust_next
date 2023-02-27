import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/Header.module.scss'
import { useState } from 'react'


export default function Header () {

    const [hamburgerSwitchToggled, setHamburgerSwitchToggeld] = useState(false)

    const showNavbar = () => {
        hamburgerSwitchToggled? setHamburgerSwitchToggeld(false) : setHamburgerSwitchToggeld(true);
    }
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.containerLogoNav}>
                        <Logo/>
                        {/*Navbar*/}
                        <div className={hamburgerSwitchToggled ? styles.containerNav : styles.nothidden}>
                            <ul className={styles.nav}>
                                <li>
                                    <Link href = "/watch-out-together" className={styles.navLink}>Watch Out Together</Link>
                                </li>
                                <li>
                                    <Link href = "/certification" className={styles.navLink}>Certification</Link>
                                </li>
                                <li>
                                    <Link href = "/about" className={styles.navLink}>About</Link>
                                </li>
                                <li>
                                    <Link href = "/privacy" className={styles.navLink}>Privacy</Link>
                                </li>
                            </ul>
                        <div>
                <button hidden>Metamask</button>
            </div>
        </div>
                    </div>
                    <button 
                    className={styles.hamburger}
                    onClick={showNavbar}>
                        <span className={styles.bar}>
                          
                        </span>
                    </button>
                    <ConnectMetamask/>
                </div>
            </div>

        </header>
    )
}

function Logo(){
    return(
        <Link href = "/" className={styles.logo}>
            <span className={styles.spanL}>
                <Image
                src="/Swarmtrustbanner.svg" 
                alt=" Swarmtrust Logo"
                width={128}
                height={36}
                /> 
                
            </span>
        </Link>

    )
}

function ConnectMetamask(){
    return(
        <div className={styles.containerMetamask}>
            {/*Metamask Connect Button*/}
            <button>Connect Metamask</button>
        </div>
    )
}

