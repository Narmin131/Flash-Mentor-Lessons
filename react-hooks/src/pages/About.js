import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import Todos from "../components/Todos"


const About = () => {


  const [todoList, setTodoList] = useState(localStorage.getItem('TodoList') ? JSON.parse(localStorage.getItem('TodoList')) : [])


  useEffect(() => {
    localStorage.setItem('TodoList', JSON.stringify(todoList))
  }, [todoList])


  return (
    <>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Todos todoList={todoList} setTodoList={setTodoList} />

      <section>
        <div className="box" style={{
          width: '300px',
          height: '300px',
          backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end'
        }}>
          <h1 >Text</h1>
        </div>
      </section>

    </>
  )
}

export default About