import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import Home from "./Home/Home";
import NewProducts from "./New Products/NewProducts";
import Product from "./Product/Product";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
          <Home />
      </div>      
    </Router>

  );
}

export default App;
