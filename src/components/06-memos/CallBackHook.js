import React, { useCallback, useState } from 'react'
import '../03-examples/hooks.css'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);
    

   const increment = useCallback( (num)=>{
       setCounter(c => c + num);
   }, [setCounter])

    return (
        <>
            <h1>CallBackHook: {counter}</h1>
            <hr/>
            
            <ShowIncrement increment={increment}/>
        </>
    )
}
