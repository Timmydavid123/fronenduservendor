import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import OtpVerification from './OtpVerification';
import { ToastContainer } from 'react-toastify';
import VendorSignupForm from './VendorSignupForm';
import VendorLogin from './Vendorlogin';
import ForgotPassword from './ForgotPassword'; 
import ChangePasswordVerification from './verify';
import ChangePassword from './passwordverified';
import ResetPasswordLinkSent from './ResetPasswordLinkSent';  
import ChangePasswords from './passwordchanged';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendorlogin" element={<VendorLogin />} />
          <Route path="/Vendorsignup" element={<VendorSignupForm />} />
          <Route path="/otp" element={<OtpVerification />} />
          <Route path="/verify" element={<ChangePasswordVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password/:token" element={<ChangePassword />} />
          <Route path="/password-link-sent" element={<ResetPasswordLinkSent />} />
          <Route path="/passwordchanged" element={<ChangePasswords />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
