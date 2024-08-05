/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import MorganStanley from '../Images/Morgan-Stanley-Logo.png'
import BlacktydeCapital from '../Images/blacktyde_capital.png'
import Natixis from '../Images/natixis.png'
import Canaccord from '../Images/canaccord.png'
import TarkuResources from '../Images/Tarku_resources-logo.png'
import TDCanada from '../Images/td-canada-trust-logo.png'
import Barclays from '../Images/Barclays-Logo.png'
import Kingfish from '../Images/Kingfish-Group-logo.png'
import Brookfield from '../Images/brookfield-logo.png'
import ResourceCapital from '../Images/resource_capitalFunds.png'
import SPartners from '../Images/S_partners.png'
import StephensInvestment from '../Images/stephens_investment.png'
import SixStreet from '../Images/6th_street.png'

function Partners() {

    React.useEffect(() => {
      const node = document.getElementById("logos-slide") ;
      const clone = node.cloneNode(true);
      document.getElementById("logos").appendChild(clone);

    });
       
    return (
      <section className="section partners" id="partners" aria-label="partners">
        <h2 className="h2 section-title text-center">We've Booked Meetings With ...</h2>

        <div className="logos" id="logos">
          <div className="logos-slide" id="logos-slide">
            <img src={MorganStanley} alt='Morgan Stanley Logo'/>
            <img src={BlacktydeCapital} alt='Blacktyde Capital Logo'/>
            <img src={Natixis} alt='Natixis Logo'/>
            <img src={Canaccord} alt='Canaccord Logo'/>
            <img src={TarkuResources} alt='Tarky Resources Logo'/>
            <img src={TDCanada} alt='TD Canada Logo'/>
            <img src={Barclays} alt='Barclays Logo'/>
            <img src={Kingfish} alt='Kingfish Logo'/>
            <img src={Brookfield} alt='Brookfield Logo'/>
            <img src={ResourceCapital} alt='Resource Capital Logo'/>
            <img src={SPartners} alt='S Partners Logo'/>
            <img src={StephensInvestment} alt='Stephens Investment Logo'/>
            <img src={SixStreet} alt='6th Street Logo'/>
          </div>
        </div>
      </section>
  );
}

export default Partners;
