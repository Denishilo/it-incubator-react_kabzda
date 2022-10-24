import React, {useState, KeyboardEvent} from "react";
import {selectType} from "../../App";
import styles from './Select.module.css'


type SelectPropsType = {
    selectValue: string
    onChangeSelect: (title: string) => void
    items: Array<selectType>
}

export const Select = (props: SelectPropsType) => {

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
                if (items[i].title === hoveredItem) {
                    setHoveredElementValue(items[i + 1].title)
                    break
                }
            }
            if (e.key === 'ArrowUp' && items[i - 1]) {
                if (items[i].title === hoveredItem) {
                    setHoveredElementValue(items[i - 1].title)
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
                    {items.map(item => <div onMouseEnter={() => onMouseItemsHandler(item.title)}
                                            className={styles.item + ' ' + (hoveredElementValue === item.title ? styles.itemSelected : '')}
                                            onClick={() => onClickItemHandler(item.title)}>{item.title}</div>)}</div>
                : ''}
        </div>

    )
}
