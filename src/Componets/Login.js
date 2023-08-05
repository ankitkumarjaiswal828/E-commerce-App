import React from 'react'
import Headers from "./Headers";
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Button } from 'react-bootstrap';

export default function Login() {
  
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      useNavigate.push("./");
    }
  }, []);

  function login(){
    console.log(email,password)
  }
  return (
    <div>
      <Headers />
      <div className='col-sm-4 offset-sm-4'>
        <br />
        <h1 style={{color:'red'}}>Login page</h1>
       <br />
        
        <input type="email" className="form-control" placeholder="Enter Email" 
        value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <br />
        
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <br />
        <Button variant="primary" size="md" onClick={login}>
          Log In
        </Button>
      </div>
    </div>
  );
}
