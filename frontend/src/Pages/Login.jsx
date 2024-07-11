import React from 'react'
import '../CSS/Login.css'

export const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign UP</h1>
        <div className="loginsignup-field">
        
        <input type="text" placeholder='Name' />
        <input type="email" name="email" id="" placeholder='Email' />
        <input type="password" placeholder='Password' />

        </div>
        <button>Sign Up</button>
        <p className='loginsignup-login'> Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By countinuimg i agree the Term of use & privacy policies</p>
        </div>
        

      </div>
    </div>
  )
}
