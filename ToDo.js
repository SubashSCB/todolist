import React from 'react'
import './ToDo.css'

const ToDo = () => {
  return (
    <div className='whole' >
     <div className='heading'>Do it Now</div> 
     <div className='first'>
      <input className='input' value=" What's the task?"></input>
      <button className='button'>Add</button>
      </div>
      <div className='bottom'>
      <div className='task1'>Buy Groceries</div>
      <div className='task2'>Write a Blog post</div>
      <div className='task3'>Complete Assignments</div>
      <div className='task4'>Go for a walk</div>
      </div>
      
    </div>
  )
}

export default ToDo
