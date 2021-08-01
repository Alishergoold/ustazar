import React from 'react';
import { Main } from '../styles/Main';
import Header from './Header/Header';
import NewProducts from './New Products/NewProducts';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import Footer from './Footer/Footer';
import Product from './Product/Product';




function App() {
  return (
    <Main>
      <Header />
      <NewProducts />
      <Product />
      <Footer />
    </Main>
  );
}

export default App;
