/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import headerLogo from '../Images/KeystoneCapitalGlobal.png'

function Header() {
  return (
    <header className="header" id="header" data-header>
      <div className="container">
        <a href="#header" className="logo"><img src={headerLogo} alt="Company Logo" /></a>
      </div>
    </header>
  );
}

export default Header;