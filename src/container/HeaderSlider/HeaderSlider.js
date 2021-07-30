import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { StyledHeaderCorusel } from '../../styles/container/Header/Header';


class HeaderSlider extends Component {
  render() {
    return (
      <StyledHeaderCorusel>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/727407-pxhere.jpg"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/603552-pxhere.jpg"
                alt="Second slide"
              />
              {/*<Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>*/}
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/1536891-pxhere.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          
          <div className="carousel__bottom">
            <div className="carousel__promoution">
              <Card.Img variant="top" src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/04/226560-pxhere-n.jpg" />
            </div>
            <div className="carousel__promoution">
              <Card.Img variant="top" src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/04/724325-pxhere-n.jpg" />
            </div>
            <div className="carousel__promoution">
              <Card.Img variant="top" src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/04/1513739-pxhere-n.jpg" />
            </div>
          </div>

      </StyledHeaderCorusel>
    );
  }
}

export default HeaderSlider;