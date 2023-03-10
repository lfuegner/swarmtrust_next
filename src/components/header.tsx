import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/Header.module.scss'
import { MetaMaskInpageProvider } from '@metamask/providers';
import { useState } from 'react'


export default function Header () {

    

    const [hamburgerSwitchToggled, setHamburgerSwitchToggeld] = useState(false)

    const showNavbar = () => {
        hamburgerSwitchToggled? setHamburgerSwitchToggeld(false) : setHamburgerSwitchToggeld(true);
    }
    const adresse:string = "0x4543"

    //Metamask Wallet Button

    const [defaultAccount, setDefaultAccount] = useState<string | null>('Connect Metamask')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false)

    const isWalletConnected = async () => {

    }

    const connectWallet = async() => {
  
        const result = await ethereum.request<string[]>({method: 'eth_requestAccounts'})
        if(result){
          accountChangeHandler(result[0])
          console.log(result)
        }

    }

    const accountChangeHandler = (newAccount:any) => {
        setDefaultAccount(newAccount);
      }
    
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.containerLogoNav}>
                        <Logo/>
                        {/*Navbar*/}
                        <div className={styles.containerNav}>
                            <ul className={styles.nav}>
                                <li className={styles.navItem}>
                                    <Link href = "/mint" className={styles.navLink}>Mint</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href = "/impressum" className={styles.navLink}>Certification</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href = "/gdpr" className={styles.navLink}>GDPR</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href = "/" className={styles.navLink}>Impressum</Link>
                                </li>
                            </ul>

                            <div className={styles.navWallet}>
                                <button 
                                className={styles.navButton}
                                onClick={connectWallet}
                                >{defaultAccount}</button>
                            </div>
                        <div>
                    </div>
                </div>
            </div>
                    <button 
                    className={styles.hamburger}
                    onClick={showNavbar}>
                        <span className={styles.bar}>
                          
                        </span>
                    </button>
                    
            <div className={styles.containerMetamask}>
                <button 
                className={styles.navButton}
                onClick={connectWallet}
                >{defaultAccount}</button>
            </div>
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
                src="/Rastergrafik.svg" 
                alt=" Swarmtrust Logo"
                width={128}
                height={36}
                /> 
                
            </span>
        </Link>

    )
}

