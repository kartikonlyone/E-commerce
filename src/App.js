import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import ProductInfo from './components/ProductInfo';
import Navbar from './components/Navbar';
import { ProductsContextProvider } from './Global/ProductsContext';

const App = () => {
  return (
    <ProductsContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:id" component={ProductInfo} />
        </Switch>
      </Router>
    </ProductsContextProvider>
  );
};

export default App;
