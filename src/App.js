import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import Settings from './setting';

const ProtectedRoute = ({ element }) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = /* Add your authentication logic here */ true;

  return isAuthenticated ? element : <Navigate to="/vendorlogin" />;
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(/* Check if user is logged in */ false);

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/vendorlogin"
            element={<VendorLogin onLogin={() => setLoggedIn(true)} />}
          />
          <Route
            path="/Vendorsignup"
            element={<VendorSignupForm isAuthenticated={isLoggedIn} />}
          />
          <Route
            path="/otp"
            element={<ProtectedRoute element={<OtpVerification />} />}
          />
          <Route
            path="/verify"
            element={<ProtectedRoute element={<ChangePasswordVerification />} />}
          />
          <Route
            path="/forgot-password"
            element={<ProtectedRoute element={<ForgotPassword />} />}
          />
          <Route
            path="/change-password/:token"
            element={<ProtectedRoute element={<ChangePassword />} />}
          />
          <Route
            path="/password-link-sent"
            element={<ProtectedRoute element={<ResetPasswordLinkSent />} />}
          />
          <Route
            path="/passwordchanged"
            element={<ProtectedRoute element={<ChangePasswords />} />}
          />
          <Route 
          path="/settings" 
          element={<ProtectedRoute  element={<Settings/>} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
