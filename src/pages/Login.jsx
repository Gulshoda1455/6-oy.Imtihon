import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { backendUrl } from './BackendUrl';

function Login() {
   const navigate = useNavigate();


const[email, setEmail] = useState("");
const[password, setPassword] = useState("");

const handleSubmit = async ()=>{
  try{
    const response = await axios.post(`${backendUrl}/auth`,
    {
        email:email,
        password:password
    })
    if(response.data){
        localStorage.setItem("token", response.data);
        navigate("/"); 
    }
    
  } catch(error){
    alert("Foydalanuvchi email yoki parol xato");
    console.log("Xatolik yuz berdi", error);
  }
    
}

  return (
     <div className='w-screen h-screen bg-gray-300 flex items-center justify-center'>
         <div className='bg-white p-6 shadow-xl'>
            <div className='mb-5'>
                <h1 className='text-xl text-center'>Login</h1>
            </div>
            <div className='mb-4 flex flex-row justify-between'>
                <label htmlFor="email">email</label>
                <input 
                  id='email' 
                  className='border-2 ml-4 bg-gray-200' 
                  type="text" 
                  value={email} 
                  onChange={(evt)=>{
                  setEmail(evt.target.value)
                }} />
            </div>
            <div className='mb-4 flex flex-row justify-between'>
               <label htmlFor="password">Password</label>
               <input 
                 id='password'
                 className='border-2 ml-4 bg-gray-200' 
                 type="text" 
                 value={password} 
                 onChange={(evt)=>{
                   setPassword(evt.target.value)
                 }} />
            </div>
            <div className='mb-4 text-center'>
                <button onClick={handleSubmit} className='bg-gray-500 w-[50%] text-white py-2 px-6 rounded-md'>Login</button>
            </div>
    </div>
     </div>
  )
}

export default Login