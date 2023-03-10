import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../components/header'
import Install from '../../components/install'
import styles from '../../styles/Mint.module.scss'
import { useState } from 'react' 


export default function Mint() {
  const router = useRouter()
  const {tokenID} = router.query
  console.log(tokenID)

  const [defaultAccount, setDefaultAccount] = useState(null)

  const connectWallet = () => {
  
      ethereum.request({method: 'eth_requestAccounts'}).then((result:any) =>
        accountChangeHandler(result[0])) 
    

  }

  const accountChangeHandler = (newAccount:any) => {
    setDefaultAccount(newAccount);

  }



  return (
    <>
      <Head>
        <title>Swarmtrust | Mint</title>
        <meta name="description" content="Mint our Community Poap NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.body}>
          <Header />
          <div className={styles.main}>
            <button
            className={styles.button}
            onClick={connectWallet}>
            Connect Metamask
            </button>

            <button
            className={styles.button}>
            Mint
            </button>
          </div>
      </main>
    </>
  )
}
