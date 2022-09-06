import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed : boolean,

}
function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    if(props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionMenu/>
        </div>
    )

}

type AccordionTitlePropsType ={
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

function AccordionMenu () {
    console.log('AccordionMenu rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion