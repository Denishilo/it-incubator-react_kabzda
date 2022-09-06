import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";

function App() {
    console.log('App rendering')
  return (
    <div>
        <PageTitle title={"This is APP component"} />
        <PageTitle title={"My friends"} />
        <Raiting value={3}/>
        <Accordion titleValue={'Menu'} collapsed ={true} />
        <Accordion titleValue={'Users'} collapsed ={false}/>
        <Raiting value={0}/>
        <Raiting value={1}/>
        <Raiting value={2}/>
        <Raiting value={3}/>
        <Raiting value={4}/>
        <Raiting value={5}/>
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
