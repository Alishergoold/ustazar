import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HeaderTop extends Component {
  render() {
    return (
      <div className='header__row'>
        <Container fluid>
          <Row className='header__row'>
            <Col sm={6} lg={6}>
              <div className='header__contact'>
                <div className='header__phone_number'>
                  <Link className='link header__link'>
                    <FiPhoneCall className='header__link_icon' /> 
                    +998-99-888-77-66
                  </Link>
                  <Link className='link header__link'>
                    <HiOutlineMail className='header__link_icon' />
                    support@mail.com
                  </Link>
                </div>
              </div>
            </Col>

            <Col sm={6} lg={6}>
              <div className='header__socials'>
                <div className='header__social'>
                  <Link className='link header__link'>
                    <FaFacebookF className='header__link_icon' />
                  </Link>
                  <Link className='link header__link'>
                    <FiInstagram className='header__link_icon' />
                  </Link>
                  <Link className='link header__link'>
                    <FaTelegramPlane className='header__link_icon' />
                  </Link>
                </div>

                <div className='header__auth'>
                  <Link className='link header__link'>My Account</Link>
                  <Link className='link header__link'>Login</Link>
                </div>
              </div>
            </Col>            
          </Row>
        </Container>
      </div>
    );
  }
}

export default HeaderTop;