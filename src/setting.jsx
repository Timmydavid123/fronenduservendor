import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './set.css'; // Make sure to import your CSS file

const Settings = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    country: 'Africa', 
    dateOfBirth: '',
    gender: 'male',
  });

  const handleUpdate = () => {
    // Implement your update logic here
    console.log('Updating...', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li className="space"><FontAwesomeIcon icon={faBars} /></li>
            <li><input type="text" placeholder="what are you looking for?" /></li>
            <li><FontAwesomeIcon icon={faUser} /></li>
            <li><FontAwesomeIcon icon={faShoppingCart} /></li>
            <li><FontAwesomeIcon icon={faHeartRegular} /></li>
            <li><button className="u">log out</button></li>
            <li><button className="I">sell</button></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="side1">
        <div class="boss">
        <i className="fa-regular fa-circle-user fa-2xl" style={{ color: '#ffbb00' }}></i>
            <p>Hello</p>
            <h1>Kahl Ahmed</h1>
            </div>
            <div class="e">
                
                <h4> <i class="fa-solid fa-list"></i> &nbsp; Personal information</h4>
                            </div>
            <div class="m">
                
<h4> <i class="fa-solid fa-list"></i> &nbsp; My Order</h4>
            </div>
            <div class="r">
<h4> <i class="fa-regular fa-message"></i> &nbsp; My ratings</h4>
            </div>
            <div class="t">
<h4> <i class="fa-regular fa-record-vinyl"></i> &nbsp; Track Orders</h4>
            </div>
            <div class="p">
                <h4> <i class="fa-regular fa-credit-card"></i> &nbsp; Payment method</h4>
            </div>
            <div class="c">
                <h4> <i class="fa-solid fa-recycle"></i> &nbsp; Change password</h4>
            </div>
            <div class="s">
                <h4> <i class="fa-solid fa-shop"></i> &nbsp; Sell on Market Sparkle</h4>
            </div>


        </div>
        <div className="side2">
          <h3>Personal Information</h3>
          <FontAwesomeIcon icon={faCircleUser} className="fa-2x" style={{ color: '#ffbb00' }} /><br />
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <input type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} /><br />
          <select name="country" value={formData.country} onChange={handleChange}>
            <option>Africa</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>North America</option>
            <option>Oceania</option>
            <option>South America</option>
          </select>
          <input type="date" name="dateOfBirth" placeholder="Date of birth" value={formData.dateOfBirth} onChange={handleChange} />
          <div className="gee">
            <p>Gender</p>
            <input type="radio" name="gender" checked={formData.gender === 'male'} onChange={handleChange} /><label>male</label>
            <input type="radio" name="gender" checked={formData.gender === 'female'} onChange={handleChange} /><label>female</label>
          </div>
          <button onClick={handleUpdate}>Update</button>
          <p>Connect your social media account for a smoother experience </p>
          <img src="./google.png" alt="" />
        </div>
      </div>
      <div className="foot">
        <footer className="footer">
        <div className="cover">       
            <div className="row">
              <div className="footer-col">
                <ul>
                  <li><a href="#">10% off your first order</a></li>
                  <li><input type="text" placeholder="enter your email" /></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Surpport</h4>
                <ul>
                  <li><a href="#">Lorem ipsum, dolor sit amet consectetur </a></li>
                  <li><a href="#">+234A4ID52219</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Account</h4>
                <ul>
                  <li><a href="#">Login/ Register</a></li>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Favourite</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Quick link</h4>
                <ul>
                  <li><a href="#"> Privacy Policy</a></li>
                  <li><a href="#">Term Of Use</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Correct</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Download App</h4>
                <div className="social-links">
                  <a href="#"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Settings;
