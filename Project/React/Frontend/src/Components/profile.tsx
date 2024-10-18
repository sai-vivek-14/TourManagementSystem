import React from 'react'
import img from './defaultuser.jpg'
import './css_files/profile.css'
const profile = () => {
  return (
    <div className='profile-container'>
        <div className='profile'>
        <h1 className='myprofile'>Your Profile</h1>
           <img alt='image' src={img} className='user_image'></img>
           <div className='user_information'>
           <label htmlFor='username'>Username:</label>
           <input title='username' name='username' type='text' value="arun18"></input>
           <label htmlFor='Fullname'>Full name:</label>
           <input title='Fullname' name='Fullname' type='text' value="Arun lingeswar"></input>
           <label htmlFor='mobileno'>Mobile no:</label>
           <input title='mobileno' name="mobileno" type='text' value="91778 70208"></input>
           <label htmlFor='email'>email:</label>
           <input title='email' name='email' type='email' value="arun@gmail.com"></input>
           <label htmlFor='address'>address:</label>
            <input title='address' name='address' type='text' value="tirupati,aandhra pradesh  509216" />
             </div>
        </div>
    </div>
  )
}

export default profile
