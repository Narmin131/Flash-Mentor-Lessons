import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Home = () => {

    // useEffect(()=>{
    //    her render zamani isleyir
    // })

    // useEffect(()=>{
    //  yalniz ilk render olunan zaman, layihe ayaga qalxanda
    // }, [])


    // useEffect(()=>{
    // parametrden asili olaraq isleyir
    // }, [parameter])


    const [todos, setTodos] = useState([])

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res.data);
                setTodos(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <ol>
                {
                    todos.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))
                }
            </ol>

        </>
    )
}

export default Home