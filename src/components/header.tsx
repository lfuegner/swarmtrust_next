import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/Header.module.scss'


export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.containerLogoNavR}>
                        <Logo/>
                        <NavbarRow/>
                    </div>
                    <Hamburger/>
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

function NavbarRow(){
    return(
        <div className={styles.containerNavR}>
            <ul className={styles.navR}>
                <li>
                    <Link href = "/watch-out-together" className={styles.navRLink}>Watch Out Together</Link>
                </li>
                <li>
                    <Link href = "/certification" className={styles.navRLink}>Certification</Link>
                </li>
                <li>
                    <Link href = "/about" className={styles.navRLink}>About</Link>
                </li>
                <li>
                    <Link href = "/privacy" className={styles.navRLink}>Privacy</Link>
                </li>
            </ul>
        </div>
    )
}

function Hamburger(){
    return(
        <button className={styles.hamburger}>
            <span className={styles.bar}>
                            
            </span>
        </button>
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

