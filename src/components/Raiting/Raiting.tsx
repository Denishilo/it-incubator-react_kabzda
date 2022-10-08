import React from "react";

export type RaitingValue = 0 | 1 | 2 | 3 | 4 | 5
export type RaitingPropsType = {
    value: RaitingValue
    onChangeValue: (value: RaitingValue) => void
}

export function Raiting(props: RaitingPropsType) {
    const {value, onChangeValue} = props
    const onChangeValueHandler = (value: RaitingValue) => {
        onChangeValue(value)
    }
    return (
        <div>
            <Star selected={value > 0} value={1} callback={onChangeValueHandler}/>
            <Star selected={value > 1} value={2} callback={onChangeValueHandler}/>
            <Star selected={value > 2} value={3} callback={onChangeValueHandler}/>
            <Star selected={value > 3} value={4} callback={onChangeValueHandler}/>
            <Star selected={value > 4} value={5} callback={onChangeValueHandler}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RaitingValue
    callback: (value: RaitingValue) => void
}

function Star(props: StarPropsType) {

    const {selected, callback, value} = props

    const onClickHandler = () => {
        callback(value)
    }
    return (
        <span onClick={onClickHandler}>{selected ? <b>star </b> : 'star'} </span>
    )

}