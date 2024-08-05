/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import linkedinLogo from '../Images/linkedin-logo.png'
import Typed from 'typed.js'
import { PopupButton } from 'react-calendly';

function Hero() {

  React.useEffect(() => {
    const typed = new Typed(".typed-words", {
      strings: ["VCs", "Accredited Institutional Investors", "Angels", "Family Offices", "High Net Worths", "Funds", "Private Equity Partners", "Lenders"],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 600,
      startDelay: 200,
      loop: true,
      showCursor: false,
      cursorChar: "|",
      attr: null,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  
  
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-heading-type">
            <h1 className="h1 hero-title">Facilitate Deals With</h1>
            <div className="typed-words"></div>
          </div>
          <div>
            <p className="hero-text">
              Tap into a world of Capital Access and Direct Channels to over 10M+ Investors
            </p>
          </div>
          <div className="hero-btn p25">
            <PopupButton className='btn btn-primary' url='https://calendly.com/luigiperri/30-minute-meeting' rootElement={document.getElementById('root')} text='Book Your Call'/>
            <a href="https://www.linkedin.com/company/keystonecapitalgroup/" target="_blank" rel="noreferrer"> <img src={linkedinLogo} alt='Linkedin Logo'/> </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
