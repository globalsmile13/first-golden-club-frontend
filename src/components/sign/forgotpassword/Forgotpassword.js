import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/fggc.png';
import './Forgotpassword.css';

const Forgotpassword = () => {
  const [recoveryCode, setRecoveryCode] = useState('');

  const handleRecoveryCodeChange = (e) => {
    setRecoveryCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a request to the backend to initiate the password recovery process
      // You can use fetch or axios for this purpose
      const response = await fetch('/api/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recoveryCode }),
      });
      
      if (response.ok) {
        // Handle successful response
        console.log('Recovery code sent successfully');
        // Redirect the user to the reset password page
        // You may need to implement this route
        window.location.href = '/resetpassword';
      } else {
        // Handle error response
        console.error('Failed to send recovery code');
        // Display an error message to the user
        // You can set a state variable to manage error messages and display them in the UI
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='forgotpassword-container'>
      <div className='forgotpassword-heading'>
        <Link to='/' className='logo'>
          <img src={Logo} alt='logo' />
        </Link>
        <div className='forgotpassword-headingtext'>
          <h3>Forgot Password</h3>
        </div>
      </div>
      <div className='forgotpassword-content'>
        <form onSubmit={handleSubmit} className='forgotpassword-box'>
          <div className='forgotpassword-codebox'>
            <input
              type='text'
              id='recoveryCode'
              name='recoveryCode'
              value={recoveryCode}
              onChange={handleRecoveryCodeChange}
              placeholder='Recovery code'
              aria-labelledby='recoveryCode'
              required
            />
          </div>
          <div className='forgotpassword-text'>
            <p>Please input your recovery code to enable you to get a new password</p>
          </div>
          <div className='forgotpassword-button'>
            <button type='submit'>Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
