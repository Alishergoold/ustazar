import styled from "styled-components";

export const StyledNewProduct = styled.div`
  padding: 50px 0;

  .card{
    border:none;
    text-align:center;
  }
  .card__image{
    background-color:#000;
  }
  .card__badge{
    position: absolute;
    top: 5%;
    left: 0;
    z-index:2;
  }
  .card__badge_bestseller{
    background-color: #ff0000;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    padding:8px 12px;
  }
  .card__badge_sale{
    left: 87.8%;
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
    position: relative;
    transform: scale(1 , 1);

  }
  .card__img:hover{
    transform: scale(0.95);
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
`;