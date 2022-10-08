import React, {useState} from "react";

export function UnControlledRaiting() {
    const [value, setValue] = useState(0)

    const onClickHandler = (num: number) => {
        setValue(num)
    }

    return (
        <div>
            <Star callback={() => onClickHandler(1)} selected={value > 0}/>

            <Star callback={() => onClickHandler(2)} selected={value > 1}/>

            <Star callback={() => onClickHandler(3)} selected={value > 2}/>

            <Star callback={() => onClickHandler(4)} selected={value > 3}/>

            <Star callback={() => onClickHandler(5)} selected={value > 4}/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star(props: StarPropsType) {
    const {selected, callback} = props

    const onClickHandler = () => {
        callback()
    }

    return <span onClick={onClickHandler}> {selected ? <b>star </b> : 'star '}  </span>
}