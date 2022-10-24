import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Raiting, RaitingValue} from "./components/Raiting/Raiting";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnContolledAccordion";
import {UnControlledRaiting} from "./components/UnContolledRaiting/UnControlledRaiting";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";


export type selectType  = {
    title:string
    value:number
}
function App() {

    const items = [
        {title:'Denis', value:1},
        {title:'Kseniya', value:2},
        {title:'Kirill', value:3},
    ]
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [valueRaiting, setValueRaiting] = useState<RaitingValue>(0)
    const [valueOnOff, setValueOnOff] = useState(false)

    const [selectValue, setSelectValue] = useState<string>(items[0].title)

    const onChangeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const onChangeValue = (value: RaitingValue) => {
        setValueRaiting(value)
    }

    const changeOnOff = () => {
        setValueOnOff(!valueOnOff)
    }
    const onChangeSelectHandler = (title:string) => {
        setSelectValue(title)
    }
    return (
        <div className={'app__wrapper'}>
            <PageTitle title={"This is APP component"}/>
            <Accordion titleValue={'Menu'} collapsed={collapsed} onChangeCollapsed={onChangeCollapsed}/>
            <UnControlledAccordion titleValue={'Users'}/>
            <Raiting value={valueRaiting} onChangeValue={onChangeValue}/>
            <UnControlledRaiting/>
            <OnOff value={valueOnOff} changeOnOff={changeOnOff}/>
            <UncontrolledOnOff/>

            <Select selectValue={selectValue} onChangeSelect={onChangeSelectHandler} items={items}/>
        </div>
    );
}

export default App;
