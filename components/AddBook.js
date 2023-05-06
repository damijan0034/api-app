import React, { useState } from 'react'
import classes from '@/styles/Form.module.css'

export default function AddBook() {
  const[inputs,setInputs]=useState({
    name:"",
    description:"",
    imgUrl:""
  })
  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const sendRequest=()=>{
    fetch('/api/books',{
      method:'POST',
      body:JSON.stringify({
        name:inputs.name,
        description:inputs.description,
        imgUrl:inputs.imgUrl
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res)=>res.json())
      .then((data)=>console.log(data))
  }
  const handleSubmit=(e)=>{
              e.preventDefault();
            console.log(inputs)

            //validation
            if(!inputs.name && !inputs.description && !inputs.imgUrl){
              return
            }else{
              sendRequest()
            }
            }
  return (
    <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.formControl}>
            <label htmlFor='name'>Name</label> 
            <input 
              value={inputs.name} 
              onChange={handleChange} 
              type='text' name='name' />
            <label htmlFor='description'>Description</label>
             <input 
             value={inputs.description} 
              onChange={handleChange} 
              type='text' name='description' />
            <label htmlFor='imgUrl'>Image URL</label> 
            <input 
              value={inputs.imgUrl} 
              onChange={handleChange} 
              type='text' name='imgUrl' />
            <button type='submit'>Submit</button>
        
        </form>
    </div>
  )
}
