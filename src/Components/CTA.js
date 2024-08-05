/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState} from 'react'
import Modal from '../Components/Modal'
import { PopupButton } from 'react-calendly';

import WhiteCompanyLogo from '../Images/logo_white.png'

function CTA() {

    const [isModalVisible, setModalVisible] = useState(true);
  
    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };

  return (
      <section className="section cta" id="cta" aria-label="cta">

          <div className="cta">
              <div className="container">
                  <div className="cta-text w-50">
                      <h2 className="h2 text-center">Book Your Call Today</h2>

                      <p className="cta-p text-center">
                          Unlock Innovative Access to Global Capital with Direct Channels to Over 10 Million Institutional,
                          Accredited Retail, and Angel Investors
                      </p>

                      <div className="hero-btn p25" style={{justifyContent: "center"}}>
                        <PopupButton className='btn btn-primary' url='https://calendly.com/luigiperri/30-minute-meeting' rootElement={document.getElementById('root')} text='Book Your Call'/>
                        <a href='#cta' className="btn btn-primary" onClick={openModal}>Become an Investor</a>
                      </div>

                  </div>

                  <div className="cta-logo">
                      <img src={WhiteCompanyLogo} width="650*" height="650" className="img-cover" alt='Keystone Capital Logo in White'/>
                  </div>
              </div>

          </div>
          <Modal isVisible={isModalVisible} onClose={closeModal} />
      </section>
  );
}

export default CTA;
