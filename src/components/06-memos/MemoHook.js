import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesdo';
import { useCounter } from "../../hooks/useCounter";

import '../03-examples/hooks.css'

export const MemoHook = () => {

    const [show, setShow] = useState(true)    
    const {counter, increment} = useCounter(50);


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <>
            <h1>Memo Hook</h1>
            <h3>Memorize Counter: <small>{counter} </small></h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

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
 