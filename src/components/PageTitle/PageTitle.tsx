import React from "react";

type PagePropsType = {
    title: string,
}

export function PageTitle (props: PagePropsType) {
    return <h2>{props.title}</h2>
}