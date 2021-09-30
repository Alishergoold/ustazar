import React from "react";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { StyledHeaderNavbar } from "../../styles/container/Header/Header";

import { Link } from "react-router-dom";

class HeaderNavbar extends Component {
  render() {
    return (
      <StyledHeaderNavbar>
        <Navbar expand="lg" color={'#fff'} fixed="sticky">
          <Container>
            <Navbar.Toggle className="menu__burger" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="#home" className="link"><Link to="/home">Home</Link></Nav.Link>
                <Nav.Link href="#home" className="link">Product Category</Nav.Link>
                <NavDropdown title="Sections" id="basic-nav-dropdown" className="link">
                  <NavDropdown.Item href="#action/3.1">Sections</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Neckleis
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Earrings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Rings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.5">
                    Braclet
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Shop" id="basic-nav-dropdown"  className="link">
                  <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Checkout
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Wishlist
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home" className="link">Blog</Nav.Link>
                <Nav.Link href="#link" className="link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>      
      </StyledHeaderNavbar>
    );
  }
}

export default HeaderNavbar;
