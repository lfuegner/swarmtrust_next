import styles from '../styles/components/Start.module.scss'

/* const changeHome = () => {
    document.getElementById('home').style.display ="none"
} */

export default function Start() {

    
    return (
        <div id={styles.home}>
            <h1 className={styles.clickMe}>Click me</h1>
        </div>
    )
}

