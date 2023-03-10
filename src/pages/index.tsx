import Head from 'next/head'
import {TextButton} from '../components/button'
import Header from '../components/header'
import Start from '../components/start'
import styles from '../styles/Home.module.scss'

function changeText(tier:string){
  const text:string = 'Ich bin ein ' + tier
  return(
    <p>{text}</p>
  )
}


export default function Home() {

  var text:string = 'Click'
  return (
    <>
      <Head>
        <title>Swarmtrust</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <Header />
      <main className={styles.main}>
          <div className={styles.home}>
          <h1 className={styles.h1}>Hello World</h1>
          <TextButton handleClick = {() =>
          {text = 'shark'}
          }/>
          <h1 className={styles.h1}>{text}</h1>
          </div>
          
          <div className={styles.container}>
            <h1 className={styles.h1}>Watch Out Together</h1>
          </div>
          <div className={styles.container}>
            <h1 className={styles.h1}>Certification</h1>
          </div>
            
          <div className={styles.container}></div>
        
      </main>
      </div>
    </>
  )
}
