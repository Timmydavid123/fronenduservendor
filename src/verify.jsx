import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './verify copy.css'; 


const ChangePasswordVerification = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setLoading(true);

    // You can perform any asynchronous operati on here (like navigation or API call)
    // For example, navigating to the login page after a delay
    setTimeout(() => {
      setLoading(false);
      toast.success('Verification Successful. Redirecting to login...', { position: 'top-right' });
      navigate('/Vendorlogin');
    }, 1000); 
  };

  return (
    <div className="container bg-light">
      <div className="" id="mainbox2">
        <section className="" id="image2">
          <img src="./images/Check mark circle front side in white background.png" alt="" className="" />
        </section>

        <section id="text11">
          <p className="text-success"><span>Verification Successful</span></p>

          <p className="text-bold text-center">
           <h2>Congratulations, you have been successfully verified. </h2> 
            You’re all set to explore MarketSparkle and have a happy shopping.
          </p>

          <button
            type="button"
            className="btn9 btn9-warning btn4-lg w-75 text-black"
            onClick={handleContinue}
            enabled={loading}
          >
            {loading ? 'Loading...' : 'Continue'}
          </button>
        </section>
      </div>
    </div>
  );
};

export default ChangePasswordVerification;
