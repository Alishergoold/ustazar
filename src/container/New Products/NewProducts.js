import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import { StyledNewProduct } from '../../styles/container/StyledProducts/StyledProducts';

class NewProducts extends Component {
  render() {
    return (
      <StyledNewProduct>
        <Container>
          <h2 className="title">New Products</h2>
          <div>
            <Card style={{ width: '18rem', color:'#000'}}>
              <Link>
                <Card.Img variant="top" src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/Ring-Luxury-Jewelry-Womens-Rich-Precious-Diamond-2405145.jpg" />
              </Link>
              <Card.Body>
                <Card.Title>Diamond Ring 2 carat Eternity Band</Card.Title>
                <Card.Text>
                  1000$
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </StyledNewProduct>
    );
  }
}

export default NewProducts;