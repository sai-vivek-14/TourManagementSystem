import img from './images/projectlogo.png'
import './css_files/Register.css'
import {Link,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import Warning from './Warning'
import axios from 'axios'
const Register = () => {
    const [pasw,setPsw]=useState("")
    const [cpsw,setCpsw]=useState("")
    const [post,setPost]=useState({name:"",username:"",password:""})
    const [warn,setWarn]=useState(false)
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/register").then((Response)=>{console.log(Response.data)})
    })
    const handleChange=(event)=>{
        setPost((prevPost)=>({
         ...prevPost,[event.target.name]:event.target.value   
        }))
    }
    const handlePswdChange=(event)=>{
        setPsw(event.target.value)
        setPost((prevPost)=>({
         ...prevPost,[event.target.name]:event.target.value   
        }))
    }
    const handleConfirmPswdChange=(event)=>{
        setCpsw(event.target.value)
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(pasw==cpsw){
        setWarn(false)
        axios.post("http://127.0.0.1:8000/register",{name:post.name,username:post.username,password:post.password})
        .then(()=>{alert("Account created successfull.Now Login");navigate('/')}).catch(()=>{alert("Username already exists")})
        }
        else{
            setWarn(true)
        }
}
  return (
    <>
    <div className='page'>
    <div className="imgcontain"> <img alt="" src={img}/></div>
    <div className="container">
        <div className="create"><h1>Create Account</h1>
    
        <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
                 <input type="text" id="name" name="name" placeholder="Enter your full name" onChange={handleChange} required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="username" placeholder="Enter your email" onChange={handleChange} required/>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Create a password" onChange={handlePswdChange} required/>

            <label htmlFor="confirm_password">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm your password" onChange={handleConfirmPswdChange} required/>
            {warn?<Warning text="Password does not match"/>:null}
            <button type="submit" >Register</button>
        </form>
            <p>Already have an account? <Link to="/">Log In</Link></p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Register