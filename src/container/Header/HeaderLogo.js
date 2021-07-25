import React, { Component } from "react";
import { Link } from "react-router-dom";

import { CgSearch } from "react-icons/cg";
import { VscHeart } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { StyledHeaderLogo } from "../../styles/container/Header/Header";

class HeaderLogo extends Component {
  render() {
    return (
      <StyledHeaderLogo>
        <Container>
          <Row>

            <Col className="header__search">
              <Link>
                <Card.Img
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/04/shoppingcart-logo.png"
                />
              </Link>
            </Col>

            <Col className="header__search">
              <div>
                <InputGroup className="header__input mb-3">
                  <FormControl
                    placeholder="Search Products"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">
                    <CgSearch />
                  </InputGroup.Text>
                </InputGroup>
              </div>

              <div className="link cart__icon_relative">
                <Link className="link">
                  <VscHeart className="link cart__icon_heart" />
                  <span className="cart__counter">0</span>
                </Link>
              </div>

              <div className="cart__box">
                <div className="link cart__icon_relative">
                  <Link className="link">
                    <CgShoppingCart className="link cart__icon_cart" />
                  <span className="cart__counter">0</span>
                </Link>
                </div>

                <div className="mycart__total">
                  <div class="my__cart">Total</div>
                  <div class="cart__total">£0.00</div>
                </div>

                <div class="widget">
                  <h2 class="widget__title">Cart</h2>
                  <div class="widget__cart_content"></div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </StyledHeaderLogo>
    );
  }
}

export default HeaderLogo;
