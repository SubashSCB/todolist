import React, { useState } from 'react'
import './ToDo.css'

const ToDo = () => {
  const[inputValue,setInputValue]=useState("");
  const toDoArray=["Buy Groceries","Write a Blog post","Complete Assignments","Go for a walk"]
  return (
    <div className='whole' >
     <div className='heading'>Do it Now</div> 
     <div className='first'>
      <input className='input' placeholder=" What's the task?" value={inputValue} onChange={(text)=>setInputValue(text.target.value)}/>
      <div className='button' >Add</div>
      </div>
      <div className='bottom'>
        {toDoArray.map((x,i)=>(
          <div className='task1'>{i+1} {x}</div>
        ))}
      {/* <div className='task1'>Buy Groceries</div>
      <div className='task2'>Write a Blog post</div>
      <div className='task3'>Complete Assignments</div>
      <div className='task4'>Go for a walk</div> */}
      </div>
      
    </div>
  )
}

export default ToDo
