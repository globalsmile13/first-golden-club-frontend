import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/fggc.png';
import './Userdetails.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth-context';
import { useHttpClient } from '../../../hooks/http-hook';
import Loader from '../../fragments/loader/Loader';

const Userdetails = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();

  const [data, setData] = useState(null); // State to hold data from MongoDB
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from MongoDB on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_URL}payment/initiate-payment`,
          'GET',
          null,
          { Authorization: `Bearer ${auth.token}` } // Pass auth token in headers
        );
        setData(response.data); // Set data from MongoDB response
      } catch (err) {
        setError(err.message); // Handle any errors during data fetch
      }
    };

    fetchData();
  }, [sendRequest, auth.token]);

  const checkPaymentHandler = async () => {
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_URL}payment/check-payment?transaction_id=${data?.transaction_id || ''}`,
        'GET',
        null,
        { Authorization: `Bearer ${auth.token}` }
      );

      if (response) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  if (isLoading) {
    return <Loader color="color-primary" />;
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error fetching data: {error}</p>
      </div>
    );
  }

  return (
    <div className="userdetails-container">
      {data && (
        <>
          <div className="userdetails-cover">
            <div className="userdetails-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="userdetails-content">
              <h3>{data?.parent_profile?.username || ''}</h3>
              <div className="userdetails-line"></div>
              <div className="userdetails-info">
                <p>Account name</p>
                <p>{data?.parent_wallet?.account_name || ''}</p>
              </div>
              <div className="userdetails-info">
                <p>Account number</p>
                <p>{data?.parent_wallet?.account_number || ''}</p>
              </div>
              <div className="userdetails-info">
                <p>Bank</p>
                <p>{data?.parent_wallet?.bank_name || ''}</p>
              </div>
              <div className="userdetails-info">
                <p>Phone Number</p>
                <p>{data?.parent_profile?.phone_number || ''}</p>
              </div>
            </div>
          </div>
          <div className="userdetails-instruction">
            <p>ALERT THE RECEIVER</p>
            <p className="instruction-call">
              Please call the user on Normal call or Whatsapp Call before you make payment{' '}
              {isLoading && <Loader color="color-white" className="ml-2" />}
            </p>
          </div>
          <button className="userdetails-button">
            <button onClick={checkPaymentHandler} className="pending-link">
              I HAVE MADE PAYMENT
            </button>
          </button>
        </>
      )}
    </div>
  );
};

export default Userdetails;