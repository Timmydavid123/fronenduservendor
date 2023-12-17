import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './verify.css'
import 'bootstrap/dist/css/bootstrap.min.css';// Import Bootstrap CSS

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Assuming you have the vendorId from the vendor signup response or somewhere else
    const vendorId = '...';

    try {
      const response = await axios.post('https://backend-cmrf.onrender.com/api/verify-email-vendor', { vendorId, otp });
      console.log('Vendor OTP verification successful:', response.data);
      toast.success('Email address verified successfully.');

      // After successful OTP verification, navigate to the vendor login page
      navigate('/verify');
    } catch (error) {
      console.error('Vendor OTP verification error:', error.response.data);
      toast.error('Vendor OTP verification unsuccessful.');
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      const response = await axios.post('https://backend-cmrf.onrender.com/api/resend-otp', { /* Add necessary data for resend */ });
      console.log('Resend OTP successful:', response.data);
      toast.success('OTP resent successfully.');
      setCountdown(600); // Reset the countdown after resending OTP
    } catch (error) {
      console.error('Resend OTP error:', error.response.data);
      toast.error('Failed to resend OTP.');
    }
  };

  return (
    <div className="container text-center vh-100 d-flex align-items-center">
      <div className="container bg-white h-35" id="mainbox3">
        <section className="">
          <img src="./images/3d render customer leave feedback on phone screen.png" alt="" className="image3" />
        </section>

        <section className="text12">
          <h5 className="text-center text-success">Verify Email</h5>
          <p className="text-center text-dark">
            Please enter the 6 digit code sent to your email to verify
          </p>

          <form onSubmit={verifyOtp}>
            <input
              className="form-control "
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <div className="border border-5 border-light rounded-5 w-25 text-center mx-auto">
              {Math.floor(countdown / 60)}:{countdown % 60 < 10 ? `0${countdown % 60}` : countdown % 60}
            </div>

            <p className="text-center6 text-warning" onClick={resendOtp} style={{ cursor: 'pointer' }}>
              Resend OTP
            </p>

            <button
              type="submit"
              className="btn6 btn6-warning btn1-lg text-black w-50"
            //   style={{ margin: '0px 25%' }}
              disabled={loading || countdown === 0}
            >
              {loading ? 'Verifying...' : 'Submit'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default OtpVerification;
