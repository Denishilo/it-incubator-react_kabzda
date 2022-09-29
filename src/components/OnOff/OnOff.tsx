import styles from './OnOff.module.css'
import {useState} from "react";

export const OnOff = () => {

    const [value, setValue] = useState(true)

    return (
        <div>
            <button onClick={() => {
                setValue(true)
            }} className={value ? styles.active : styles.without}>ON
            </button>
            <button onClick={() => {
                setValue(false)
            }} className={value ? styles.without : styles.noactive}>OFF
            </button>
            <button className={value ? styles.active : styles.noactive}>Indicate</button>

        </div>
    )

}
