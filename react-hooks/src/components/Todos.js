import React from 'react'

const Todos = ({ todoList, setTodoList }) => {


  const deleteSingleItem = (todo) => {
    const filteredArray = todoList.filter((item, index) => {
      return todo !== item
    })

    setTodoList(filteredArray)
  }


  return (
    <>

      <ol>
        {
          todoList.map((todo, index) => (
            <li>{todo} <button className='btn btn-danger' onClick={() => deleteSingleItem(todo)}>Delete item</button></li>
          ))
        }
      </ol>
    </>
  )
}

export default Todos