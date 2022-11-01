import React, {useMemo, useState} from "react";


const selectMemoBelarus = [
    {id: 1, country: 'Belarus', city: 'Minsk'},
    {id: 2, country: 'Belarus', city: 'Grodno'},
    {id: 3, country: 'Belarus', city: 'Vitebsk'},
    {id: 4, country: 'Belarus', city: 'Orsha'},
    {id: 5, country: 'Belarus', city: 'Brest'},
    {id: 1, country: 'Ukraine', city: 'Kiev'},
    {id: 2, country: 'Ukraine', city: 'Lviv'},
    {id: 3, country: 'Ukraine', city: 'Belaya Cerkov'},
    {id: 3, country: 'Ukraine', city: 'Chernigov'},
]

export const UseMemo = () => {
    console.log('MEMO')
    let [counter, setCounter] = useState<number>(0)

    const onClickHandler = () => {
        setCounter(counter + 1)
        console.log('counter increase')
    }

    const arrBell = useMemo(()=>{
        return selectMemoBelarus.filter(el=>el.country === 'Belarus').map(el=>{
            console.log('MAP BEL CITY')
            return (
                el.city
            )
        })
    },[selectMemoBelarus])

    const arrUkraine = useMemo(()=>{
        return selectMemoBelarus.filter(el=>el.country === 'Ukraine').map(el=>{
            console.log('MAP Ukraine CITY')
            return (
                el.city
            )
        })
    },[selectMemoBelarus])


    return (
        <>
            {counter}
            <button onClick={onClickHandler}>+</button>
            <div>{arrBell}</div>
            <div>{arrUkraine}</div>
        </>
    )
}