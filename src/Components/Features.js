/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

function Features() {
  return (
<section className="section features" id="testimonials" aria-label="features">
        <div className="container">

          <h2 className="h2 section-title text-center">Reasons to Choose Us</h2>

          <p className="section-text text-center">
            Listen to what others are saying about our process and revolution in the supply chain.
          </p>

          <ul className="grid-list">

            <li>
              <div className="features-card">

                <data className="card-number" value="01">01</data>

                <h3 className="h3 card-title">Revolutionary Component Sourcing</h3>

                <p className="card-text">
                  "Working with Keystone Capital revolutionized our component sourcing strategy. Their direct OEM
                  connections ensured we received high-quality chips, on time, every time."
                  <br /><br />- John H
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="02">02</data>

                <h3 className="h3 card-title">Invaluable Market Expertise</h3>

                <p className="card-text">
                  "Keystone Capital's in-depth knowledge of the semiconductor market made them invaluable partners. They
                  navigated us through market shortages with ease."
                  <br /><br />- Emily R.
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="03">03</data>

                <h3 className="h3 card-title">Strategic OEM Solutions</h3>

                <p className="card-text">
                  "Their strategic sourcing solutions matched our OEM needs perfectly, contributing significantly to our
                  production continuity and success."
                  <br /><br />- Marcus T.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>
  );
}

export default Features;
