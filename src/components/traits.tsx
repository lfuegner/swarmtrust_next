import styles from '../styles/components/Traits.module.scss'

//class hinzufügen hidden (display: none !important)

export function Trait() {
    return (
        <div className={styles.wrapper}>
                <div className={styles.trait}>
                    <h3>Poap Traits</h3>
                    <button>Arrow</button>
                </div>

                <div className={styles.region}>
                    <ColorTrait/>
                    <AnimalTrait/>
                    <FibonacciTrait/>
                </div>
                <hr className={styles.separator}></hr>
            </div>
    )
}

function ColorTrait() {
    return(
        <div>
            <h4 className={styles.h4}>Color Trait</h4>
            <div className={styles.radiogroup} role='radiogroup'>
                {/*Color Label: Black */}
                <label>
                    <input className={styles.input} type='radio' name='color trait' value='solid' checked></input>
                    <div className={styles.button}></div>
                </label>

                {/*Color Label: White */}
                <label>
                    <input className={styles.input} type='radio' name='color trait' value='solid' checked></input>
                    <div className={styles.button}></div>
                </label>

            </div>
        </div>
    )

}

function AnimalTrait() {
    return(
        <div>
            <h4 className={styles.h4}>Animal Trait</h4>
            <div className={styles.radiogroup} role='radiogroup'>
                {/*Color Label: Whale */}
                <label>
                    <input className={styles.input} type='radio' name='color trait' value='solid' checked></input>
                    <div className={styles.button}></div>
                </label>

                {/*Color Label: Shark */}
                <label>
                    <input className={styles.input} type='radio' name='color trait' value='solid' checked></input>
                    <div className={styles.button}></div>
                </label>

                {/*Color Label: Flipper */}
                <label>
                    <input className={styles.input} type='radio' name='color trait' value='solid' checked></input>
                    <div className={styles.button}></div>
                </label>

                {/*Color Label: Sea eagle */}
                <label>
                    <input className={styles.input} type='radio' name='color trait' value='solid' checked></input>
                    <div className={styles.button}></div>
                </label>
            </div>
        </div>
    )
}

function FibonacciTrait() {
    return(
        <div>
            <h4 className={styles.h4}>Fibonacci Trait</h4>
            <div className={styles.radiogroup} role='radiogroup'>
                {/*Color Label: On */}
                <label>
                    <input className={styles.input} type='radio' name='color trait' value='solid' checked></input>
                    <div className={styles.button}></div>
                </label>

                {/*Color Label: Off */}
                <label>
                    <input className={styles.input} type='radio' name='color trait' value='solid' checked></input>
                    <div className={styles.button}></div>
                </label>

            </div>
        </div>
    )
}