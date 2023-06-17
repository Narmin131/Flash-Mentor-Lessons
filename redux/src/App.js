import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increase, Decrease, Reset } from "./redux/actions/Actions"
import AppRouter from './router/AppRouter'
const App = () => {

  const dispatch = useDispatch()

  const counter = useSelector((store) => store.reducerForCounter)

  const array = [
    {
      id: 1,
      name: 'Narmin'
    },
    {
      id: 1,
      name: 'Narmin'
    },
    {
      id: 2,
      name: 'Ayse'
    },
    {
      id: 2,
      name: 'Ayse'
    }
  ]

  return (
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={() => dispatch(Increase())}>+</button>
      <button onClick={() => dispatch(Decrease())}>-</button>
      <button onClick={() => dispatch(Reset())}>reset</button>
      <AppRouter />
    </>
  )
}

export default App