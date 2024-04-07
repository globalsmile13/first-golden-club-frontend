import React from 'react'
import Logo from '../../assets/fggc.png'
import './Resetpassword.css'
import { Link } from 'react-router-dom'


const Resetpassword = () => {
  return (
    <div className='resetpassword-container'>
        <div className='resetpassword-logo'>
            <img src={Logo} alt='logo' />
        </div>
        <div className='resetpassword-input'>
            <div className='resetpassword-content'>
                <h2>Password reset</h2>
                 <p>Please create your new password</p>
            </div>
           
            <div>
                <div className='resetpassword-label'>
                    <label htmlFor='password'>New Password</label>
                    <input type='password' id='password' name='password' placeholder='Enter your Password' aria-labelledby='password' required/>
                </div>
                <div className='resetpassword-label'>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input type='password' id='password' name='confirm-password' placeholder='Confirm Password' aria-labelledby='confirm-password' required/>
                </div>
                <div className='resetpassword-button'>
                    <button><Link to='/signin'></Link>Continue</button>
                </div>
                <div className='resetpassword-account'>
                    <Link to='/signin' className='resetpassword-signin'>back to Log In</Link>
                    <p>Don’t have an account?  <Link to='/signup' className='resetpassword-signup'>Create account</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resetpassword