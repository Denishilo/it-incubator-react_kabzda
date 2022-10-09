import styles from './OnOff.module.css'

type OnOffPropsType = {
    value: boolean
    changeOnOff: () => void
}

export const OnOff = (props: OnOffPropsType) => {
    const {value, changeOnOff} = props
    return (
        <div>
            <button onClick={changeOnOff}
                    className={value ? styles.active : styles.without}>ON
            </button>
            <button onClick={changeOnOff}
                    className={value ? styles.without : styles.noactive}>OFF
            </button>
            <button className={value ? styles.active : styles.noactive}>Indicate</button>
        </div>
    )
}