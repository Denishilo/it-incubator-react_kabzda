import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import {
    UnControlledAccordion,

} from "./components/UnControlledAccordion/UnContolledAccordion";
import {UnControlledRaiting} from "./components/UnContolledRaiting/UnControlledRaiting";

function App() {
    console.log('App rendering')
    return (
        <div className={'app__wrapper'}>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            {/*<Accordion titleValue={'Menu'} collapsed ={true} />*/}
            {/*<Accordion titleValue={'Users'} collapsed ={false}/>*/}
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'Users'}/>
            {/*<Raiting value={0}/>*/}
            {/*<Raiting value={1}/>*/}
            {/*<Raiting value={2}/>*/}
            {/*<Raiting value={3}/>*/}
            {/*<Raiting value={4}/>*/}
            {/*<Raiting value={5}/>*/}
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

type PagePropsType = {
    title: string,
}

function PageTitle(props: PagePropsType) {
    console.log('PageTitle rendering')
    return <h2>{props.title}</h2>
}


export default App;
