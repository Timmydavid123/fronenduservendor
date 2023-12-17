import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './passwordlinksent.css'

const ResetPasswordLinkSent = () => {
  const handleResendLink = () => {
    // Implement the logic to resend the password reset link
    console.log('Resending password reset link...');
  };

  return (
    <div className="container bg-light">
      <div className="bg-white h-75">
        <section className="div mx-auto w-50">
          <img src="./images/Character moving the at sign with a cart.png" alt="" className="h-80 w-100 " />
        </section>

        <section className="diva">
          <p className="text-warning text-center" id="word">
            Password reset link has been sent to your mail
          </p>

          <p className="text-center" id="word">
            Password reset instructions sent to your email. <br /> Please check and follow the link provided.
          </p>

          <p className="text-center text-warning" id="word">
            I did not receive any link
          </p>

          {/* Button to resend the link */}
          <button
            type="button"
            className="btn text-center btn-outline-warning btn-lg text-center"
            onClick={handleResendLink}
          >
            Resend Link
          </button>
        </section>
      </div>
    </div>
  );
};

export default ResetPasswordLinkSent;
