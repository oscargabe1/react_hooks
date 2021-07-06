import React from 'react'
import { useForm } from '../../hooks/useForm'


export const TodoAdd = ({handleAddTodo}) => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    
        if (description.trim().length == 0) {
            return;
        }
    
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false 
        }
    
        handleAddTodo(newTodo);
    
        reset();
    
    }
    const [{description}, handleInputChange, reset] = useForm({
        description:''
    })

    return (
        <>
            <h4>Agregar Todo</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-outline-primary mt-1 btn-block">Agregar</button>

            </form>
            
        </>
    )
}
