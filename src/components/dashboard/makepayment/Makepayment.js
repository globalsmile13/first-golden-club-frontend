import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth-context';
import { useHttpClient } from '../../../hooks/http-hook';
import Loader from '../../fragments/loader/Loader';
import Logo from '../../assets/fggc.png';
import './Makepayment.css';

const Makepayment = () => {
  const [uplineData, setUplineData] = useState(() => {
    return JSON.parse(localStorage.getItem("uplineData")) || null;
  });

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();

  // 🔄 Re-fetch `uplineData` whenever localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setUplineData(JSON.parse(localStorage.getItem("uplineData")) || null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const initiatePaymentHandler = async () => {
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_URL}payment/initiate-payment`, 
        'GET', 
        null, 
        { 'Authorization': `Bearer ${auth.token}` }
      );

      if (response.status === true) {
        const upline_profile = response.data?.profile;

        if (upline_profile.isAdmin === true) {
          navigate('/dashboard');
        } else {
          localStorage.setItem("uplineData", JSON.stringify(response.data));
          setUplineData(response.data); // 🔄 Ensure the UI updates
          navigate('/dashboard/makepayment/userdetails');
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='makepayment-container'>
      <div className='makepayment-logo'>
        <img src={Logo} alt='' />
      </div>
      <div className='makepayment-content'>
        <p>Make payment to Allocated member</p>
        <div className='makepayment-name'>
          <h4>{uplineData?.parent?.profile?.username || ""}</h4>
        </div>
      </div>
      <div className='makepayment-button'>
        <button onClick={initiatePaymentHandler} className='payment-link'>
          Proceed
          {isLoading && <Loader color="color-white" className="ml-2" />}
        </button>
      </div>
    </div>
  );
};

export default Makepayment;
