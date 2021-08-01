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
`;