import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './log_in.css';

const VendorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // Load the Google Sign-In API script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    
    script.onerror = (error) => {
      console.error('Error loading Google Sign-In API script:', error);
    };
    
    document.body.appendChild(script);
    

    script.onload = () => {
      // Initialize the Google Sign-In API
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: '659683617107-0k1fkhku6ttc21q0kibbb91amf172e23.apps.googleusercontent.com', 
        });
      });
    };
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const googleAuth = window.gapi.auth2.getAuthInstance();
      const googleUser = await googleAuth.signIn();

      // Obtain the Google ID token
      const idToken = googleUser.getAuthResponse().id_token;

      // Send the token to your server for verification
      const response = await axios.post('https://backend-cmrf.onrender.com/api/auth/google', {
        idToken,
      });

      console.log('Google Sign-In successful:', response.data);

      // Handle the response accordingly (e.g., navigate, set user state)
    } catch (error) {
      console.error('Google Sign-In error:', error);
      toast.error('Google Sign-In unsuccessful. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors([]);

    try {
      // Validate email and password
      if (!email || !password) {
        const errorMessage = 'Please enter both email and password.';
        // setErrors([errorMessage]);

        // Display error message using toast
        toast.error(errorMessage);
        return;
      }

      // Set loading to true while making the request
      setLoading(true);

      // Make your login request here using the email, password, and rememberMe state
      const response = await axios.post('https://backend-cmrf.onrender.com/api/login/vendor', {
        email,
        password,
        rememberMe,
      });

      // If successful, you can navigate or perform other actions
      console.log('Login successful:', response.data);

      // Reset form fields
      setEmail('');
      setPassword('');
      setRememberMe(false);

      // Display success message using toast
      toast.success('Login successful!');
    } catch (error) {
      // Update the errors state with the error messages
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);

        // Display each error using toast.error
        error.response.data.errors.forEach((errorMessage) => {
          toast.error(errorMessage);
        });
      } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        toast.error('An error occurred during login. Please try again.');
      }

      console.error('Login error:', error);
    } finally {
      // Set loading back to false when the request is complete
      setLoading(false);
    }
  };

  return (
    <div>                                                                                                                                                                                                                                                                             

      <img src="./images/LOGO.png" alt="" id="image" />

      <div id="mainbox4">
        {/* form_section */}
        <section id="first_sec1">
          <h3>Log in to access your account</h3>
          <p>Enter your details below</p>
          <div className="login-form-container">
            <input
              className="login-input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-form-container">
            <input
              className="login-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

              <form action="">
                <div className="remember-forgot-container">
                  <label htmlFor="remember">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <span style={{ color: 'black' }}>Remember me</span>
                  </label>
                  <Link  to="/forgot-password" onClick={handleForgotPassword}>
           <h5 style={{ color: 'black' }}>Forgotten password?</h5> 
          </Link>
                </div>
              </form>
          <button id="submit" onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging in...' : 'Log in'}
          </button>

          {/* Display errors */}
          {errors.length > 0 && (
            <div className="error-container">
              <p className="error-message">Errors:</p>
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <hr />
          <h4 className="word">OR</h4>
          <hr />
          <div className="icons">
          <div className="google-signin-button" onClick={() => handleGoogleSignIn()}>
            <img
              src="/images/google.png" // Update the path to your Google logo image
              alt="Google"
              className="google-logo"
            />
            <span>Sign in with Google</span>
          </div>
          <h4 id="account1">Don't have an account?<a href="/Vendorsignup"> Sign Up</a></h4>
        </div>
          
        </section>
                  
        {/* image_section */}
        <section className="sec_sec"></section>
        
      </div>
    </div>
  );
};

export default VendorLogin;
