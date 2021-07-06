import React, { useState } from 'react'
import { useCounter } from "../../hooks/useCounter";
import { Small } from './Small';

import '../03-examples/hooks.css'

export const Memorize = () => {

    const [show, setShow] = useState(true)    
    const {counter, increment} = useCounter();

    return (
        <>
            <h1>Memorize Counter: <Small value={counter}/> </h1>
            <hr/>

            <button className="btn btn-primary" onClick={increment}>+1</button>

            <button className="btn btn-outline-primary ml-3"
                    onClick={()=>{
                        setShow(!show)
                    }}>
                Show/Hide {JSON.stringify(show)}
            </button>
            
        </>
    )
}
 