/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useRef} from 'react';

function Modal({isVisible, onClose}) {

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  useEffect(() => {
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName('form')) {
        form.reset();
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div id="form-modal" className="modal" >
    <div className="modal-content" ref={modalRef}>
      <span className="close-modal" aria-label='Close' onClick={onClose}>&times;</span>
      <div className="form-container">
        <h2>SIGN UP BELOW TO RECEIVE OUR INVESTMENT OFFERINGS</h2>
        <p> Want to invest along side us in emerging market assets in the hottest markets across the globe? </p>

        <form action="https://formspree.io/f/xayrrdrb" method="post">
          <div className="form-group">
            <label htmlFor="first-name">First Name <span className="required">*</span></label>
            <input type="text" id="first-name" name="first-name" required placeholder="First Name"/>
            <div className="error">Please complete this required field.</div>
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name <span className="required">*</span></label>
            <input type="text" id="last-name" name="last-name" required placeholder="Last Name"/>
            <div className="error">Please complete this required field.</div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input type="email" id="email" name="_replyto" required placeholder="Email Address"/>
            <div className="error">Please complete this required field.</div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number <span className="required">*</span></label>
            <input type="tel" id="phone" name="phone" required placeholder="123-456-7890"/>
            <div className="error">Please complete this required field.</div>
          </div>
          <div className="form-group">
            <label>Accredited Investor? <span className="required">*</span></label>
            <div className="radio-group">
              <label><input type="radio" name="accreditation" value="accredited" required/> ACCREDITED</label>
              <label><input type="radio" name="accreditation" value="non-accredited"/> NON - ACCREDITED</label>
              <label><input type="radio" name="accreditation" value="not-sure"/> Not Sure</label>
            </div>
            <div className="error">Please complete this required field.</div>
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Modal;
