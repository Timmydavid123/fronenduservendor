import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import './vendorsign.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const VendorSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    streetAddress: '',
    zipCode: '',
  });

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);



  const navigate = useNavigate();

  useEffect(() => {
    // Fetch countries from REST Countries API
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryOptions = response.data.map(country => ({
          value: country.name.common,
          label: country.name.common,
        }));
        setCountries(countryOptions);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleInputChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
  
      // Send the form data to the backend
      const response = await axios.post('https://backend-cmrf.onrender.com/api/signup/vendor', formData);
  
      // Handle the response as needed
      console.log(response.data); // Log the response
  
      setLoading(false);
      toast.success('Vendor signup successful', { position: 'top-right' });
      navigate('/otp');
    } catch (error) {
      console.error('Error during vendor signup:', error);
      toast.error('Error during vendor signup', { position: 'top-right' });
    } finally {
      setLoading(false);
    }
  };

  return (
   <div>
    <img src="./images/LOGO.png" alt="" id="image1" />
    <div className="main_box1">
      <section id="first_sec2">
        <h3>CREATE AN ACCOUNT</h3>
        <p>Enter your details below</p>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <input
          type="text"
          id="fullName"
          placeholder="Full name"
          required
          value={formData.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Create password"
            required
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter password"
            required
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="streetAddress"></label>
          <input
            type="text"
            id="streetAddress"
            placeholder="Street Address"
            required
            value={formData.streetAddress}
            onChange={(e) => handleInputChange('streetAddress', e.target.value)}
          />
        </div>
        <div className="form-group">
              <label htmlFor="city"></label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="state"></label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
              />
            </div>

        <div className="form-group">
          <label htmlFor="country"></label>
          <Select
           
            options={countries}
            placeholder="Country"
     
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode"></label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
          />
        </div>
        <button id="submit1" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>
        <h4 id="account">Already have an account?<a href="/vendorlogin">   Log in</a></h4>
        <h1 id= "privacy" style={{ fontSize: '11px' }}>By signing up you agree to our <a href="/login">terms of use</a> and <a href="/login">privacy policy</a></h1>
      </section>
      <section className="sec_sec22"></section>
    </div>
    </div>
  );
};

export default VendorSignupForm;
