import React, { Component } from 'react';
import { Headers } from '../../styles/container/Header/Header';
import HeaderLogo from './HeaderLogo';
import HeaderTop from './HeaderTop';
import HeaderNavbar from './HeaderNavbar';
import HeaderSlider from '../HeaderSlider/HeaderSlider';

class Header extends Component {
  render() {
    return (
      <div>
        <Headers>
          <HeaderTop />
          <HeaderLogo />
          <HeaderNavbar />
          <HeaderSlider />
        </Headers>
    
      </div>
    );
  }
}

export default Header;

