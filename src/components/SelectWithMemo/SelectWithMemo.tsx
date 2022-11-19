import React, {useMemo, useState} from "react";
import {Select2} from "./Select2";

export const SelectWithMemo =()=>{

    const selectMemoBelarus = [
        {id: 1, country: 'Belarus', city: 'Minsk'},
        {id: 2, country: 'Belarus', city: 'Grodno'},
        {id: 3, country: 'Belarus', city: 'Vitebsk'},
        {id: 4, country: 'Belarus', city: 'Orsha'},
        {id: 5, country: 'Belarus', city: 'Brest'},
        {id: 1, country: 'Ukraine', city: 'Kiev'},
        {id: 2, country: 'Ukraine', city: 'Lviv'},
        {id: 3, country: 'Ukraine', city: 'Belaya Cerkov'},
    ]


    const [selectMemoValueBelarus, setSelectMemoValueBelarus] = useState<string>(selectMemoBelarus[0].city)
    //const [selectMemoValueRussia, setSelectMemoValueUkraine] = useState<string>(selectMemoUkraine[0].city)

    console.log('SelectWithMemo')

    let[counter,setCounter] = useState<number>(0)
    const onClickHandler =()=> {
        setCounter(counter+1)
        console.log('counter increase')
    }
    const onChangeSelectHandlerBelarus=(title: string)=>{
        setSelectMemoValueBelarus(title)
    }

    // const onChangeSelectHandlerUkraine=(title: string)=>{
    //     setSelectMemoValueUkraine(title)
    // }
    const Select2Memo = React.memo(Select2)
    const memoitemsBel = useMemo(()=>{
        return selectMemoBelarus.filter(el=>el.country==='Belarus')},[selectMemoBelarus])
    const memoitemsUK = useMemo(()=>{
        return selectMemoBelarus.filter(el=>el.country==='Ukraine')},[selectMemoBelarus])

    return (
        <>
            <div>
                {counter}
            </div>
            <button onClick={onClickHandler}>increase</button>
            <Select2Memo selectValue={selectMemoValueBelarus} onChangeSelect={onChangeSelectHandlerBelarus} items={memoitemsBel}/>
            <Select2Memo selectValue={selectMemoValueBelarus} onChangeSelect={onChangeSelectHandlerBelarus} items={memoitemsUK}/>
        </>

    )
}