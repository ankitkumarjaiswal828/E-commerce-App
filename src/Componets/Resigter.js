import React, { useEffect, useState } from 'react'
import { Button ,variant} from 'react-bootstrap';
import  {useNavigate}  from 'react-router-dom';
import Headers from "./Headers";

export default function Resigter() {

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      useNavigate.push('./add')
    }
  },[])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  function signup(){
    let value = {name, email, password}
    console.log(value)
  }
  return (

    <div>
      <Headers/>
      <div className='col-sm-6 offset-sm-3'>
        <br />
      <h1 className='common'>Sign Up</h1>
      <br />
        <input type="text" className='form-control' placeholder='Enter Name'
        value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <br />
        <br />
        <input type="email"  className='form-control' placeholder='Enter Email'
        value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <br />
        <br />
        <input type="password" className='form-control' placeholder='Enter Password' 
        value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <br />
        <br />
      <Button  onClick={signup} variant='primary' size='lg'>Sign Up</Button>
      </div>
    </div>
  );
}
