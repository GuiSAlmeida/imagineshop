import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';



const App = () => {
  return (
    <>
      <Container>
        <Header />
        
        
        <Home />

      </Container>
      <Footer />
    </>

  );
}

export default App;
