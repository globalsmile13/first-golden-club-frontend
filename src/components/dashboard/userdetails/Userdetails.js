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

  const [data, setData] = useState(null);         // Data from initiate-payment
  const [error, setError] = useState(null);         // Error state
  const [newUser, setNewUser] = useState(null);     // New parent's details
  const [newUserWallet, setNewUserWallet] = useState(null);   // New parent's wallet details

  // On mount, load newUser and newUserWallet from localStorage (if any)
  useEffect(() => {
    const storedUser = localStorage.getItem("newUser");
    const storedUserWallet = localStorage.getItem("newUserWallet");
    if (storedUser && storedUserWallet) {
      setNewUser(JSON.parse(storedUser));
      setNewUserWallet(JSON.parse(storedUserWallet));
    }
  }, []);

  // Fetch data from initiate-payment endpoint when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_URL}payment/initiate-payment`,
          'GET',
          null,
          { Authorization: `Bearer ${auth.token}` }
        );
        console.log("Fetched Data:", response.data); // Debugging
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [sendRequest, auth.token]);

  // Approach 2: Clear persisted newUser if it does not belong to the current user
  useEffect(() => {
    if (data && data.parent_profile && data.parent_profile._id) {
      const storedUser = localStorage.getItem("newUser");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        // If the stored newUser's _id does not match the fetched parent's _id, clear it.
        if (parsedUser._id !== data.parent_profile._id) {
          localStorage.removeItem("newUser");
          localStorage.removeItem("newUserWallet");
          setNewUser(null);
          setNewUserWallet(null);
        } else {
          // If it matches, ensure state is updated.
          setNewUser(parsedUser);
        }
      }
    }
  }, [data]);

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

  const allocateAnotherUserHandler = async () => {
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_URL}payment/reassign-user`,
        'POST',
        JSON.stringify({ currentUserId: data?.parent_profile?._id }),
        {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        }
      );

      console.log("Reassigned User Response:", response); // Debugging

      // Use the new parent's details from response.data.newUser (backend now returns it)
      if (response && response.data && response.data.newUser) {
        const assignedParent = response.data.newUser; // New parent's full details
        const walletDetails = response.data.parent_wallet; // New parent's wallet details

        console.log("New Assigned User:", assignedParent); // Debugging

        // Update state and localStorage
        setNewUser(assignedParent);
        setNewUserWallet(walletDetails);
        localStorage.setItem("newUser", JSON.stringify(assignedParent));
        localStorage.setItem("newUserWallet", JSON.stringify(walletDetails));

        // Update data state to reflect the new parent's details
        setData((prevData) => ({
          ...prevData,
          parent_profile: assignedParent,
          parent_wallet: walletDetails
        }));

        // Dispatch a storage event to notify other components if needed
        window.dispatchEvent(new Event("storage"));
      } else {
        console.warn("API did not return newUser! Check backend.");
      }
    } catch (error) {
      console.error("Error reallocating user:", error.message);
    }
  };

  const handleAllocateAnotherUser = async () => {
    await allocateAnotherUserHandler();
    await initiatePaymentHandler();
  };

  useEffect(() => {
    console.log("Updated Data:", data); // Debug log
    console.log("New User:", newUser);   // Debug log
  }, [data, newUser]);

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
              {/* Display newUser if available; otherwise, use the originally fetched data */}
              <h3>{newUser ? newUser.username : data?.parent_profile?.username || ''}</h3>
              <div className="userdetails-line"></div>
              <div className="userdetails-info">
                <p>Account name</p>
                <p>{newUserWallet ? newUserWallet.account_name : data?.parent_wallet?.account_name || ''}</p>
              </div>
              <div className="userdetails-info">
                <p>Account number</p>
                <p>{newUserWallet ? newUserWallet.account_number : data?.parent_wallet?.account_number || ''}</p>
              </div>
              <div className="userdetails-info">
                <p>Bank</p>
                <p>{newUserWallet ? newUserWallet.bank_name : data?.parent_wallet?.bank_name || ''}</p>
              </div>
              <div className="userdetails-info">
                <p>Phone Number</p>
                <p>{newUser ? newUser.profile.phone_number : data?.parent_profile?.phone_number || ''}</p>
              </div>
            </div>
          </div>
          <div className="userdetails-instruction">
            <p>ALERT THE RECEIVER</p>
            <p className="instruction-call">
              Please call the member on Normal call or Whatsapp Call before you make payment{' '}
              {isLoading && <Loader color="color-white" className="ml-2" />}
            </p>
          </div>
          <div className="userdetails-button">
            <button onClick={checkPaymentHandler} className="pending-link">
              I HAVE MADE PAYMENT
            </button>
          </div>
          <div className="userdetails-instruction">
            <p className="instruction-call">
              If the member is unavailable click the button below{' '}
              {isLoading && <Loader color="color-white" className="ml-2" />}
            </p>
          </div>
          <div className="userdetails-button">
            <button className="pending-link" onClick={handleAllocateAnotherUser}>
              ALLOCATE TO ANOTHER USER
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Userdetails;
