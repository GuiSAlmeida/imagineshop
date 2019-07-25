import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Products from './pages/Products';

const App = () => {
  return (
    <Router>
      <Container>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quem-somos" component={About} />
          {/* <Route path="/produto" component={Product} /> */}
          <Route path="/produto/:id" component={Product} />

          <Route path="/produtos" component={Products} />
          <Route component={Home} />

        </Switch>

      </Container>
      <Footer />
    </Router>

  );
}

export default App;
