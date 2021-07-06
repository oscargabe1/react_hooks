import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from "../../hooks/useCounter";

import './hooks.css';

export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);
    
    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote,author} = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading ?
                    (
                        <div className="alert alert-info">
                            Loading...
                        </div>
                    )
                :
                    (
                        <>
                        <blockquote className="blockquote text-right">
                            <p>{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                        <button className="btn btn-primary"
                                onClick={increment}>
                            Next Quote
                        </button>
                        </>
                    )
            }




 
            
        </>
    )
}