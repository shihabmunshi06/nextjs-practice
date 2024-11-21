import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { counterActions } from "../reduxPractice"

export default function Reduxpractice() {
  const counterValue = useSelector(state => state.counter.count)
  const dispatch = useDispatch()


  const [number, setNumber] = useState(0)


  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }
  const handleByAmount = () => {
    dispatch(counterActions.increaseByNumber(number))
  }

  const handleChange = (e) => {
    setNumber(Number(e.target.value))
  }

  return (
    <div>
      <h1>{counterValue}</h1>
      <input value={number} onChange={handleChange} type="number" />
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleByAmount}>by amount</button>
    </div>
  )
}
