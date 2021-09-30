import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { StyledNewProduct } from "../../styles/container/StyledProducts/StyledProducts";
import { VscHeart } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";
import Product from "../Product/Product";

class NewProducts extends Component {
  render() {
    return (
      <StyledNewProduct>
        <Container>
          <h2 className="title">New Products</h2>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link to="/product" className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
              <div className='card__scale'>
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/Ring-Luxury-Jewelry-Womens-Rich-Precious-Diamond-2405145.jpg"
                />
              </div>
              </Link>
              <Card.Body className="card__body">
                <Link to="/product" className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link to="/product" className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
                  <div className='card__scale'>                
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/571612-pxhere.jpg"
                />
                </div>
              </Link>
              <Card.Body className="card__body">
                <Link to="/product" className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
                  <div className='card__scale'>
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/663149-pxhere.jpg"
                />
                </div>
              </Link>
              <Card.Body className="card__body">
                <Link className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
              <div className='card__scale'>
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/Ring-Luxury-Jewelry-Womens-Rich-Precious-Diamond-2405145.jpg"
                />
              </div>
              </Link>
              <Card.Body className="card__body">
                <Link className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
                  <div className='card__scale'>                
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/571612-pxhere.jpg"
                />
                </div>
              </Link>
              <Card.Body className="card__body">
                <Link className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
                  <div className='card__scale'>
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/663149-pxhere.jpg"
                />
                </div>
              </Link>
              <Card.Body className="card__body">
                <Link className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="product__item">
            <Card.Img
              className="product__img"
              variant="top"
              src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/1053646-pxhere-601859.jpg"
            />

          </div>
          <div>

         <h2 className="title" style={{paddingTop:'30px'}}>Best Sellers</h2>
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
              <div className='card__scale'>
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/Ring-Luxury-Jewelry-Womens-Rich-Precious-Diamond-2405145.jpg"
                />
              </div>
              </Link>
              <Card.Body className="card__body">
                <Link className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
                  <div className='card__scale'>                
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/571612-pxhere.jpg"
                />
                </div>
              </Link>
              <Card.Body className="card__body">
                <Link className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
                  <div className='card__scale'>
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/663149-pxhere.jpg"
                />
                </div>
              </Link>
              <Card.Body className="card__body">
                <Link className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "420px", color: "#000", margin:'10px'}}>
              <Link className="link card__image">
                  <Badge className="card__badge card__badge_bestseller">Bestseller</Badge>
                  <Badge className="card__badge card__badge_sale">- 3%</Badge>
                  <div className='card__scale'>
                <Card.Img
                  className="card__img"
                  variant="top"
                  src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/663149-pxhere.jpg"
                />
                </div>
              </Link>
              <Card.Body className="card__body">
                <Link className="link">
                  <Card.Title className="card__title">
                    Diamond Ring 2 carat Eternity Band
                  </Card.Title>
                </Link>
                <Card.Text className="card__text">
                  <span class="card__price">
                  <ins>
                      <span>
                        <bdi style={{marginRight:'10px'}}>
                          <span>
                            £
                          </span>
                          1,750.00
                        </bdi>
                      </span>
                    </ins>

                    <del>
                      <span>
                        <bdi>
                          <span>
                            £
                          </span>
                          1,800.00
                        </bdi>
                      </span>
                    </del>

                  </span>
                </Card.Text>

                <div className="card__cart">
                  <Link
                    className="link link__cart link__cart_ar"
                    style={{ textDecoration: "none" }}
                  >
                    <CgShoppingCart style={{ fontSize: "26px" }} />
                    <span className="link">ADD TO CARD</span>
                  </Link>
                  <Link className="link__cart">
                    <VscHeart style={{ fontSize: "26px" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          </div>
        </Container>
      </StyledNewProduct>
    );
  }
}

export default NewProducts;
