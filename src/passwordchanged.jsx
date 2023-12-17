import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './change_password.css';

const ChangePasswords = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setLoading(true);

    // Simulate an API call or any other async operation
    setTimeout(() => {
      setLoading(false);
      toast.success('Password Changed Successfully');
      navigate('/vendorlogin'); // Use navigate instead of history.push
    }, 2000); // Simulated delay of 2 seconds
  };

  return (
    <div className="container bg-light">
      <div className="main bg-white py-3 ">
        <section className="w-40 mx-auto" id="">
          <img src="./images/Locked padlock security protection privacy 3d icon on bubble speech chat.png" alt="" className="h-100 w-100 mx-auto" />
        </section>

        <section className="divs">
          <p className="text-center text-success">Password Changed Successfully</p>

          <p style={{ fontWeight: 'light' }} className="text-center">
            Congratulations, your password has been <br />
            updated, your account is now secure with the <br />
            new password.
          </p>

          <button
            type="button"
            className="btn8 text-center btn8-warning btn-lg text-center w-50"
            style={{ margin: '0px 25%' }}
            onClick={handleContinue}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Continue'}
          </button>
        </section>
      </div>
    </div>
  );
};

export default ChangePasswords;
