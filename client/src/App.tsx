import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductDetail} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
