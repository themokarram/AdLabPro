import React from 'react'
import { useState } from 'react'
import { toast } from "react-hot-toast";
import {addDoc,collection  } from "firebase/firestore";
import { db } from "../firebase";
import feedpic from "../assets/feed2.jpg";


const Contacts = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [comment,setComment]=useState('');
  const [disableBtn,setDisableBtn]=useState(false)

  const handleSubmit= async (e)=>{
    e.preventDefault();
    setDisableBtn(true)
    console.log(name,email,phone,comment)
    
    try {
      await addDoc(collection(db,"feedbacks"),{
        name,
        email,
        phone,
        comment
      })
      setName("")
      setEmail("")
      setPhone("")
      setComment("")
      toast.success('Thank you for your feedback.')
      setDisableBtn(false)
    } catch (error) {
      toast.error("Error")
      setDisableBtn(false)
      
    }
  }
  
  
  return (
    <div className='box'>
     
     <form className='box2' onSubmit={handleSubmit}>
      <h1>Contact us</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder='Name' />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email' />
        <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Mobile Number' />
        <textarea  value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='Enter your feedback' > </textarea>
        <button disabled={disableBtn} className={disableBtn ? 'disableBtnClass':""} type='submit' > Submit </button>
        </form>
        <div className='box1'>
        <img src={feedpic} alt="feed" />
      </div>
    </div>
  )
}

export default Contacts