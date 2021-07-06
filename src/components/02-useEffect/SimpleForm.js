import React, { useEffect, useState } from 'react';
import { Message } from "./Message";

import './form.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name,email} = formState;

    useEffect( ()=>{
        console.log("hey");
    },[])

    useEffect( ()=>{
        console.log("Cambio el nombre");
    },[name])

    useEffect( ()=>{
        console.log("Cambio el email");
    },[email])

    // useEffect( ()=>{
    //     console.log("Cambio el form");
    // },[formState])


    const handleInputChange = ({target})=>{
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                />
            </div>
            <br />

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="ejemplo@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                />
            </div>

            { (name === 'Oscar') && <Message />}
        </>
    )
}
