import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import { Headers } from '../../styles/container/Header/Header';
import HeaderTop from "../Header/HeaderTop";
import HeaderLogo from "../Header/HeaderLogo";
import HeaderNavbar from "../Header/HeaderNavbar";
import HeaderSlider from "../HeaderSlider/HeaderSlider";
import NewProducts from "../New Products/NewProducts";
import Footer from "../Footer/Footer";


function Home() {
  return (
    <div>
      <Headers>
        <HeaderTop />
        <HeaderLogo />
        <HeaderNavbar />
        <HeaderSlider />
      </Headers>

      <NewProducts />

      <Footer />
    </div>  
  );
}

export default Home;
