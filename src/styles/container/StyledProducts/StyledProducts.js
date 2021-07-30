import styled from "styled-components";

export const StyledNewProduct = styled.div`
  padding: 50px 0;

  .card{
    border:none;
    text-align:center;
  }
  .card__image{
    background-color:#000;
    position: relative;
  }

  .card__badge_bestseller{ 
    position: absolute;
    background-color: #ff0000;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    padding:8px 12px;
  }
  .card__badge{
   top: 5%;
   left: 0;
   z-index:2;
 }
  .card__badge_sale{
    position: absolute;
    left: 75.6%;
    border-radius: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 100;
    background: #000;
    border: 1px solid var(--wc-highlight);
    border-right-color: #000;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
  .card__img{
    transform: scale(1 , 1);
  }
  .card__scale{
    overflow:hidden;
  }
  .card__img:hover{
    transform: scale(1.1);
    transition: 0.7s ease-in-out;
    
  }
  .card__body{
    background-color: #000;
    color: #fff;
  }
  .card__title{
    font-size: 18px;
  }
  .card__text{
    color: var(--wc-orange);
  }
  .card__cart{
    margin-bottom: 50px;
  }
  .card__cart .link{
    color: #000;
  }

  .link__cart{
    padding: 10px;
    color: #000;
    background-color: #ffffffB3;
  }
  .link__cart:hover{
    background-color:var(--wc-input-bg);
    color: #fff;
    transform: 0.5s ease-in;
    transition: 0.5s;
  }
  .link__cart .link:hover{
    color:#fff;
  }
  .link__cart_ar{
    border-right: 1px solid #888;
  }
  .product__item{
    margin-top: 50px;
  }
`;