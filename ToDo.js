import React from 'react'
import './ToDo.css'

const ToDo = () => {
  return (
    <div className='whole' >
     <p className='heading'>Do it Now</p> 
     <div className='first'>
      <input className='input' value=" What's the task?"></input>
      <button className='button'>Add</button>
      </div>
      <p className='task1'>Buy Groceries</p>
      <p className='task2'>Write a Blog post</p>
      <p className='task3'>Complete Assignments</p>
      <p className='task4'>Go for a walk</p>
    </div>
  )
}

export default ToDo
