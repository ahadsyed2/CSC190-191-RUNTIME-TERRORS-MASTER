import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './ResetPassword.css'


function ResetPassword() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }

  return (
    <>
      <section className="container">
        <div className="Reset-Password">
          <form action="">
            <h1>Reset Password</h1>

            <div className="new-password">
                <h3>New Password</h3>
                    <input type={show ? 'text' : 'password'} placeholder="" required />
            </div>
              
            <div className="confirm-password">
                <h3>Confirm New Password</h3>
                    <input type={show ? 'text' : 'password'} placeholder="" required />
            </div>

            <div className="show-password-toggle">
              <label>
                <input type="checkbox" checked={show} onChange={handleShow} />
                <h5>Show Password</h5>
              </label>
            </div>

            <div className="submit-button">
              <button type="submit" className="btn">Reset Password</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ResetPassword
