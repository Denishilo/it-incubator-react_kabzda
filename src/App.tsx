import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Raiting, RaitingPropsType, RaitingValue} from "./components/Raiting/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnContolledAccordion";
import {UnControlledRaiting} from "./components/UnContolledRaiting/UnControlledRaiting";
import {PageTitle} from "./components/PageTitle/PageTitle";

function App() {

    let [collapsed, setCollapsed] = useState<boolean>(false)
    let[valueRaiting,setValueRaiting]=useState<RaitingValue>(0)

    const onChangeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const onChangeValue = (value:RaitingValue) => {
        setValueRaiting(value)
    }


    return (
        <div className={'app__wrapper'}>
            <PageTitle title={"This is APP component"}/>
            <Accordion titleValue={'Menu'} collapsed={collapsed} onChangeCollapsed={onChangeCollapsed}/>
            <Accordion titleValue={'Users'} collapsed={collapsed} onChangeCollapsed={onChangeCollapsed}/>
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'Users'}/>
            <Raiting value={valueRaiting} onChangeValue ={onChangeValue}/>
            <Raiting value={valueRaiting} onChangeValue ={onChangeValue}/>
            <Raiting value={valueRaiting} onChangeValue ={onChangeValue}/>
            <UnControlledRaiting/>
            <UnControlledRaiting/>
            <UnControlledRaiting/>
            <UnControlledRaiting/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
        </div>
    );
}

export default App;
