/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { PopupButton } from 'react-calendly';

import Service1 from '../Images/service-1.png'
import Service2 from '../Images/service-2.png'
import Service3 from '../Images/service-3.png'
import Service4 from '../Images/service-4.png'


function Service() {

  return (
    <section className="section service" id="client_system" aria-label="client_system">
      <div className="container">
        <h2 className="h2 section-title text-center">The Client System that Works</h2>
        <ul className="grid-list">
          <li>
            <div className="service-card has-after">

              <figure className="card-icon">
                <img src={Service1} width="140" height="140" loading="lazy"
                  alt="UI/UX Creative Design" className="img"/>
              </figure>

              <div className="card-content">

                <h3 className="h3 card-title">Comprehensive Industry Partnerships</h3>

                <p className="card-text">
                  Cultivate strategic relationships across various sectors to ensure dependable supply chain solutions and promote seamless operations, yielding a sustained competitive edge.
                </p>

              </div>

            </div>
          </li>

          <li>
            <div className="service-card has-after">

              <figure className="card-icon">
                <img src={Service2} width="140" height="140" loading="lazy" alt="App Development"
                  className="img"/>
              </figure>

              <div className="card-content">

                <h3 className="h3 card-title">Diversified Market Alliances</h3>

                <p className="card-text">
                  Engage in strategic negotiations to achieve favorable terms, ensuring timely access to essential market resources and facilitating adaptable sourcing to bolster growth and innovation
                </p>

              </div>

            </div>
          </li>

          <li>
            <div className="service-card has-after">

              <figure className="card-icon">
                <img src={Service3} width="140" height="140" loading="lazy"
                  alt="Professional Content Writer" className="img"/>
              </figure>

              <div className="card-content">

                <h3 className="h3 card-title">Niche Expertise Networks</h3>

                <p className="card-text">
                  Link with sector specialists to craft custom inventory and logistical strategies, effectively reducing time to market and adeptly navigating volatile market demands.
                </p>

              </div>

            </div>
          </li>

          <li>
            <div className="service-card has-after">

              <figure className="card-icon">
                <img src={Service4} width="140" height="140" loading="lazy" alt="Graphic Design"
                  className="img"/>
              </figure>

              <div className="card-content">

                <h3 className="h3 card-title">Client Growth Assurance</h3>

                <p className="card-text">
                  Elevate client expansion strategies using our established system, integrating into expansive networks to secure essential partnerships and materials, maintaining a vanguard position in market trends.
                </p>

              </div>

            </div>
          </li>

        </ul>

        <div className="hero-btn p25">
          <PopupButton className='btn btn-primary' url='https://calendly.com/luigiperri/30-minute-meeting' rootElement={document.getElementById('root')} text='Book Your Call'/>
        </div>

      </div>
    </section>
  );
}

export default Service;
