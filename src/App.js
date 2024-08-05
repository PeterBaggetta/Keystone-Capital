/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Partners from './Components/Partners';
import Service from './Components/Service';
import Features from './Components/Features';
import FAQ from './Components/FAQ';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Modal from './Components/Modal';

function App() {
  return (
    <div>
      <Modal />
      <Header />
      <Hero />
      <About />
      <Partners />
      <Service />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
