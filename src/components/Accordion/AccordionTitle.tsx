import React from "react";

type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void

}

export function AccordionTitle(props: AccordionTitlePropsType) {
    const {title, changeCollapsed} = props
    const callback = () => {
        changeCollapsed()
    }

    return <h3 onClick={callback}>{title}</h3>
}