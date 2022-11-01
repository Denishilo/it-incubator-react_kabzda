import React, {useState, KeyboardEvent} from "react";

import styles from './SelectMemo.module.css'
import {SelectMemoType} from "../../App";


type SelectMemoPropsType = {
    selectValue: string
    onChangeSelect: (title: string) => void
    items:Array<SelectMemoType>
}

export const Select2 = (props: SelectMemoPropsType) => {
    console.log('Select2')

    const {selectValue, onChangeSelect, items} = props

    const [isColapsed, setColapsed] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState<string>(selectValue)

    const hoveredItem = hoveredElementValue;

    const onClickCollapsedHandler = () => {
        setColapsed(!isColapsed)
    }

    const onClickItemHandler = (title: string) => {
        onChangeSelect(title)
        onClickCollapsedHandler()
    }

    const onMouseItemsHandler = (title: string) => {
        setHoveredElementValue(title)
    }

    const onKeyPressHandler = (e: KeyboardEvent) => {

        for (let i = 0; i < items.length; i++) {
            if (e.key === 'ArrowDown' && items[i + 1]) {
                if (items[i].city === hoveredItem) {
                    onChangeSelect(items[i + 1].city)
                    setHoveredElementValue(items[i + 1].city)
                    break
                }
            }
            if (e.key === 'ArrowUp' && items[i - 1]) {
                if (items[i].city === hoveredItem) {
                    onChangeSelect(items[i - 1].city)
                    setHoveredElementValue(items[i - 1].city)
                    break
                }
            }
            if (e.key === 'Enter' || e.key === "Escape") {

                onChangeSelect(hoveredElementValue)
                onClickCollapsedHandler()
            }
        }
    }

    return (

        <div className={styles.selectWrapper} onKeyUp={onKeyPressHandler} tabIndex={0}>
            <div className={styles.headerValue}
                 onClick={onClickCollapsedHandler}>{selectValue}</div>
            {isColapsed ? <div className={styles.items}>
                    {items.map(item => <div key={item.id} onMouseEnter={() => onMouseItemsHandler(item.city)}
                                            className={styles.item + ' ' + (hoveredElementValue === item.city ? styles.itemSelected : '')}
                                            onClick={() => onClickItemHandler(item.city)}>{item.city}</div>)}</div>
                : ''}
        </div>

    )
}
