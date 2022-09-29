import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {

    const [value, setValue] = useState(true)

    const collapsedHandler = () => {
        setValue(!value)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} callback={collapsedHandler}/>
            {!value && <AccordionMenu/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickCollapsedHandler = () => {
        props.callback()
    }
    console.log('AccordionTitle rendering')
    return <h3 onClick={onClickCollapsedHandler}>{props.title}</h3>
}

function AccordionMenu() {
    console.log('AccordionMenu rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
