"use client"
import React, { useState } from 'react'

const page = () => {
    const [val,setVal] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        push(`/rendring/${val}`)
    }

  return (
    <div>This page shows rendering of all 3 types.<br></br>
        <div>Choose one to see more...</div><br></br>
        <form onsSubmit = {handleSubmit}>
        <button type = "submit" value="ssr" onClick={(e)=>setVal(e.target.value)}>SSR</button>
        <button type = "submit" value="ssg" onClick={(e)=>setVal(e.target.value)}>SSG</button>
        <button type = "submit" valu="isg"  onClick={(e)=>setVal(e.target.value)}>ISG</button>
        </form>
        
    </div>
  )
}

export default page