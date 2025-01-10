import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./comp_css/Signin.css"
export const SignIn = () => {  
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState(''); 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const payload={
    //   username:username,
    //   password:password,
    // }
    try {
      const result = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json' // data format ,Token, send
        },
        body: JSON.stringify({    
          username: username,
          password: password
        }),
      });
      
      const data = await result.json();
      console.log(data)
    
     if (data.token) {
        alert("Login successful");
        navigate("/productesPage");
      } else {
        alert("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
    setUserName('');
    setPassword('');
  }
 
  console.log("username:=", username, "password:=", password);

  return (
    <div className='main_container'>
     
      <form onSubmit={handleSubmit} id= 'form' >
      <h2 className='text-center'>Sign In</h2>  <hr/>  <br/>  
         <h5> <label>Username:-</label></h5> 
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
            className='w-100   '
          />
        <br/> <br/>
       
        <h5> <label>Password:-</label> </h5> 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className='w-100 '
          />       
        <br/> <br/>
        <div  className='w-50 border-0 m-auto'>
        <button type="submit" className='w-100 border-0 bg-info fw-bold fs-lg text-white rounded p-2'>
          Sign In
        </button>
        </div>
        
      </form>
    </div>
  );
};
