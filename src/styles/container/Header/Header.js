import styled from "styled-components";

export const Headers = styled.div`
  color: #fff;
  margin: 0;
  padding: 5px 0px;

  .header__row{
    background-color: #000;
    margin: 0;
    padding: 5px 0px;
    font-size: 13px;
  }

  .header__link{
    color: #fff;
    margin-right: 15px;
  }
  
  .header__link:hover {
    transition: 0.5s red;
  }

  .header__contact{
    padding:5px 0px;
  }

  .header__link_icon{
    margin-right: 5px;
  }

  .header__socials{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .header__auth .header__link:last-child{
    margin: 0;
  }
`; 

export const StyledHeaderLogo = styled.div`
  background-color: #000;
  color: #fff;
  padding: 15px 0 20px;

  .header__search,
  .cart__box{
    display: flex;
    align-items:center;
    justify-content: flex-end;
  }

  .header__input{
    padding: 0px 10px;
    margin-top: 20px;

  }
  .header__input input,
  #basic-addon1{
    color: #747474;
    background-color: #333333;
    border: 2px solid  var(--wc-input-bg);
    border-radius: 0px;
  }
  #basic-addon1{
    cursor: pointer;
    color: #fff;
    background-color: var(--wc-input-bg);
    padding: 0 20px;
  }

  .header__search>div{
    padding: 0 10px;
  }
  .header__search>div

  .mycart__total{
    font-size: 14px;
    padding-left:20px
  }

  .cart__icon_heart,
  .cart__icon_cart{
    font-size: 2em;
  }

  .cart__icon_relative,
  .cart__icon_cart{
    position: relative;
  }

  .cart__counter{
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background:  var(--wc-input-bg);
    position: absolute;
    right: -4px;
    top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .cart__box,
  .cart__icon{
    font-size: 18px;
    color: #fff;
  }

  .widget{
    display:none;
  }

`;

export const StyledHeaderNavbar = styled.div`
  color: #fff;
  background-color: #1b1b1b;

  .navbar-light .navbar-nav .nav-link {
    color: #fff;
  }

  .navbar-light .navbar-nav .nav-link:hover {
    color: var( --wc-input-bg);
  }

  .navbar-light .navbar-toggler {
    border-radius: none;
    border-color: rgba(0,0,0,.1);
    background-color: #797979;
    border-radius: 0px;
  }

  .navbar-nav .dropdown-menu {
    background-color: #1b1b1b;
  }

  .dropdown-item {
    color: #fff;
  }

  .dropdown-item:focus, .dropdown-item:hover {
    background-color: #ccc;
    color: #1e2125;
    transform: 0.3s red;
    transition: 0.3s ease-in-out;
  }

  .menu__burger{
    justify-content: center;
  }

`;

export const StyledHeaderCorusel = styled.div`
  .carousel-control-next, .carousel-control-prev {
    width: 3%;
  }
  .carousel-indicators {
    justify-content: flex-end;
  }
  .carousel__bottom{
    background-color: #333;

    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  .carousel__promoution{
    padding: 20px;
  }
`;