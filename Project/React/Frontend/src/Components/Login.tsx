import './css_files/Login.css'
import {Link,useNavigate} from 'react-router-dom'
import img from './images/projectlogo.png'

import { useEffect, useState } from 'react'
import axios from 'axios'
const Login = () => {
    const [post,setPost]=useState({'username':"",'password':""})
    const navigate=useNavigate()
    const handleChange=(event)=>{
        setPost((PrevPost)=>({...PrevPost,[event.target.name]:event.target.value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.post("http://127.0.0.1:8000/",{username:post.username})
        .then((response)=>{
            if(response.data['password']==post.password)
              navigate('/home',{state:{username:post.username}});
            else
                alert("Password does not match")})
        .catch(()=>{alert("User not found")})
            
    }
  return (<>
  <div className='page'>
    <div className="image-container">
        <img src={img} alt="Login Image"></img>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="form-container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-group">
            <label htmlFor="username">USERNAME:</label>
            <input onChange={handleChange} name="username" type="email" id="username" required/>
        </div>
        <div className="input-group">
            <label htmlFor="password">PASSWORD:</label>
            <input onChange={handleChange} name="password" type="password" id="password" required/>
        </div>
        <button className="submit-button">Sign In</button>
        <p>Don't have an account? <Link to="/register">Create an account</Link></p>
    </div>
    </form>
    </div>
  </>)
}

export default Login