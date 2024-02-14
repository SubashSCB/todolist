import React, { useRef } from 'react'
import './ToDo.css'

const ToDo = () => {
  const data=useRef();
  const handleclick=()=>{
    console.log(data.current.value,"initial value")
    localStorage.setItem("inputvalue",data.current.value)
  }
  console.log(localStorage.getItem("inputvalue"),"****")
  return (
    // <div className='whole' >
    //  <div className='heading'>Do it Now</div> 
    //  <div className='first'>
    //   <input className='input' placeholder=" What's the task?"></input>
    //   <div className='button'>Add</div>
    //   </div>
    //   <div className='bottom'>
    //   <div className='task1'>Buy Groceries</div>
    //   <div className='task2'>Write a Blog post</div>
    //   <div className='task3'>Complete Assignments</div>
    //   <div className='task4'>Go for a walk</div>
    //   </div>
      
    // </div>
    <div>
      <input ref={data}></input>
      <button onClick={handleclick}>Add</button>
    </div>
  )
}

export default ToDo
