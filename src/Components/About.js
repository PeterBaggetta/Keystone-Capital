/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { PopupButton } from 'react-calendly';

function About() {

  let run = 0;
  window.addEventListener('scroll', function (e) {

    if (document.getElementById("about") && run !== 1) {
      const counters = document.querySelectorAll('.counter');

      counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
          const target = +counter.getAttribute('data-target');
          const c = +counter.innerText;

          // Speed of numbers (increase divisor = longer)
          const increment = target / 700;

          if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 1);
          } else {
            counter.innerText = new Intl.NumberFormat('en-us').format(target);
          }
        };

        updateCounter();
      });
      run = 1;
    }

  });

  return (
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <div>
            <h2 className="h2-sm section-title" style={{justifyContent: "center", display: "flex", paddingBottom: "80px"}}>About Keystone Capital</h2>

            <figure className="about-banner">
              In 2023 Keystone Capital helped contruction companies, real estate companies, and the consumer service market
              facilitate partnerships and contracts with our highest facilitation value being $14M. <br /><br />
  
              Now in 2024 we are expanding our footprint into private and public markets, facilitating meetings between
              businesses and investors internationally. This shift enabled us to harness a system that channeled $100M+
              globally, showcasing our growing market influence.
            </figure>

            <div className="hero-btn p25" style={{justifyContent: "center", paddingTop: "50px"}}>
            <PopupButton className='btn btn-primary' url='https://calendly.com/luigiperri/30-minute-meeting' rootElement={document.getElementById('root')} text='Book Your Call'/>
            </div>
          </div>
          

          <div className="about-content">

            <div className="numbers">

              <div className="number">
                <div className="number-wrap">
                  <div className="counter number-head" data-target="10000000"></div>
                  <div className="number-head">+</div>
                </div>
                <div className="number-paragraph">Investors</div>
              </div>

              <div className="number">
                <div className="number-wrap">
                  <div className="counter number-head" data-target="1200"></div>
                  {/* <!-- <div className="number-head">+</div> --> */}
                </div>
                <div className="number-paragraph">Institutional Investors</div>
              </div>

              <div id="w-node-1" className="number">
                <div className="number-wrap">
                  <div className="number-head">$</div>
                  <div className="counter number-head" data-target="45000000"></div>
                  {/* <!-- <div className="number-head">+</div> --> */}
                </div>
                <div className="number-paragraph">In Deals</div>
              </div>

              <div id="w-node-2" className="number">
                <div className="number-wrap">
                  <div className="number-head">$</div>
                  <div className="counter number-head" data-target="75000000"></div>
                  {/* <!-- <div className="number-head">+</div> --> */}
                </div>
                <div className="number-paragraph">In Investment/Dealflow Introductions</div>
              </div>

              <div id="w-node-3" className="number">
                <div className="number-wrap">
                  <div className="counter number-head" data-target="150"></div>
                  <div className="number-head">+</div>
                </div>
                <div className="number-paragraph">Introductions Made</div>
              </div>

              <div className="number">
                <div className="number-wrap">
                  <div className="counter number-head" data-target="7"></div>
                  {/* <!-- <div className="number-head">+</div> --> */}
                </div>
                <div className="number-paragraph">Employees</div>
              </div>

            </div>

          </div>

          
        </div>
      </section>
  );
}

export default About;
