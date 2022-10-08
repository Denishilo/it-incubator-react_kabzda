import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionMenu} from "./AccordionMenu";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChangeCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {


    const {titleValue, collapsed, onChangeCollapsed} = props
    const changeCollapsed = () => {
        onChangeCollapsed()
    }

    return (
        <div>
            <AccordionTitle changeCollapsed={changeCollapsed} title={titleValue}/>
            {!collapsed && <AccordionMenu/>}
        </div>
    )
}




