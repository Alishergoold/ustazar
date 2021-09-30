import styled from "styled-components";

export const StyledProduct = styled.div`
  .main,
  .product__categories,
  .product__products,
  .product__tags{
    background-color: #000;
    padding: 30px 0;
  }
  .main{
    width: 72%;
    padding: 30px;
  }
  .aside{
    width: 25%;
  }
  .aside div{
    padding: 30px;
    margin-bottom: 40px;
  }
  .aside div:last-child{
    margin-bottom: 0;
  }
  .product__page{
    display: flex;
    align-items: top;
    justify-content: space-between;
   }
   .product__price{
     color:var(--wc-orange);
   }
   .btn__submit{
     color:#fff;
     margin-left:5px;
     background-color: var(--wc-orange);
   }
   .btn__submit:hover{
     transition: 0.3s;
     background-color: var(--wc-subtext);
   }
  .product__wishlist{
    width:50%;
    padding: 5px;
    margin: 20px 0px;
    border: 1px solid #fff;
    cursor:pointer;
    color: var(--wc-orange);
  }
  .product__wishlist:hover{
    transition: 0.2s;
    background-color: #fff;
  }
  .product__item{
    padding-left:5px;
    color: var(--wc-secondary-text);
  }
`;