import React, { useState } from 'react'

const Form = ({ todoList, setTodoList }) => {


    const [inputValue, setInputValue] = useState('')


    const submitForm = (e) => {
        e.preventDefault();
        setTodoList([...todoList, inputValue])
        setInputValue('')
    }

    const deleteAllItem = () => {
        setTodoList([])
    }


    return (
        <>
            <div className="container mt-5">
                <form className='d-flex' onSubmit={submitForm}>
                    <input type="text" className="form-control" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                    <button className="btn btn-primary">Submit</button>
                </form>

                <button className='btn btn-dark' onClick={deleteAllItem}>Delete all todos</button>
                <h1>All todos items : {todoList.length}</h1>
            </div>

        </>
    )
}

export default Form