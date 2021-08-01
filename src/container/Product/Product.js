import { Container, Row, Col, Image, Card, Badge } from "react-bootstrap";
import { CgHeart, CgSearch} from "react-icons/cg";

import { Link } from "react-router-dom";


import { StyledProduct } from "../../styles/container/StyledProduct";
import { StyledNewProduct } from "../../styles/container/StyledProducts/StyledProducts";

function Product() {
  return (
    <Container>
      <StyledProduct>
        <div className="product__page">
          <div className="main">
            <span className="sale">Sale</span>
            <Row>
              <Row>
                <Col>
                  <div className="main__left">
                    <div className="product__img">
                      <Link>
                        <CgSearch />
                      </Link>
                      <div className="product__card">
                        <Link>
                          <Image src="https://demo.themefreesia.com/diamond-store/wp-content/uploads/sites/49/2019/03/663149-pxhere.jpg" />
                        </Link>
                      </div>
                    </div>
                    <div className="product__items"></div>
                  </div>
                </Col>
                <Col>
                  <div className="main__right">
                    <h1 className="title">Diamond Ring in Sterling Silver</h1>
                    <p class="price">
                      <del aria-hidden="true">
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              £
                            </span>
                            1,300.00
                          </bdi>
                        </span>
                      </del>{" "}
                      <ins>
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              £
                            </span>
                            1,250.00
                          </bdi>
                        </span>
                      </ins>
                    </p>
                    <div className="product__submit">
                      <input type="number" />
                      <button type="submit">Add to card</button>
                    </div>
                    <div className="product__wishlist">
                      <CgHeart />
                      Add to Wishlist
                    </div>
                    <p>
                      Categories: <Link>Mixed</Link>, <Link>Rings</Link>{" "}
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                Description
                <hr />
              </Row>

              <Row className="product__description">
                <div className="description__title">Description</div>
                <div className="description__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </Row>
              
              <StyledNewProduct>
                <Row>
                  <h2 className="title" style={{paddingTop:'30px'}}>Related products</h2>
                  
                  <div style={{ display: "flex", justifyContent: "space-between"}}>
                    <Card style={{ backgroundColor:'#000', width: "420px", margin:'10px'}}>
                      <Link className="link card__image">
                        <Badge className="card__badge card__badge_bestseller">Sale</Badge>
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
                            <span className="link">ADD TO CARD</span>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor:'#000', width: "420px", margin:'10px'}}>
                      <Link className="link card__image">
                        <Badge className="card__badge card__badge_bestseller">Sale</Badge>
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
                            <span className="link">ADD TO CARD</span>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor:'#000', width: "420px", margin:'10px'}}>
                      <Link className="link card__image">
                        <Badge className="card__badge card__badge_bestseller">Sale</Badge>
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
                            <span className="link">ADD TO CARD</span>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor:'#000', width: "420px", margin:'10px'}}>
                      <Link className="link card__image">
                        <Badge className="card__badge card__badge_bestseller">Sale</Badge>
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
                            <span className="link">ADD TO CARD</span>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>

                  </div>
                
                </Row>
              </StyledNewProduct>

            </Row>              
            

          </div>

          <div className="aside">
            <div className="product__categories">product__categories</div>
            <div className="product__products">product__products</div>
            <div className="product__tags">
              lorem asknasdjj ashdjkashdk ahsdh asdjdgasgdfahgf asf agdfahgsdf
              agsdfasgfdhgasf dghasfd ghasfdhgasfd hgasf hgasfd ghasfdghasf
              ghasfdghaf ghdfaghsf hgasf gahsfd product__tags
            </div>
          </div>
        </div>
      </StyledProduct>
    </Container>
  );
}

export default Product;
