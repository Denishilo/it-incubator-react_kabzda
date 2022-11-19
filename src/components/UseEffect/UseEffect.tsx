import styles from './UseEffect.module.css'
import {useEffect, useState} from "react";
import React from "react";

export const UseEffect = () => {

    const getDate = (): string => {
        return new Date().toLocaleTimeString('ru', {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
    }

    const [clock, setClock] = useState<string>(getDate())

    useEffect(() => {
        console.log('effect')
        setInterval(() => {
            setClock(getDate())
        }, 1000)
    },[])


    return (
        <div className={styles.wrapper}>
            <div className={''}>
                Clock
            </div>
            <div className={styles.clock}>
                {clock}
            </div>
        </div>
    )
}