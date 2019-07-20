import React from 'react';
import Title from '../../components/Title';
import Card from '../../components/Card';
import product from '../../images/product.jpg';
import Ads from '../../components/Ads';
import ads1 from '../../images/ads1.jpg';
import ads2 from '../../images/ads2.jpg';
import Carousel from '../../components/Carousel';
import './style.scss';


const adsList = [
  {
    image: ads1,
    link: "http://samsung.com",
    id: 1
  },
  {
    image: ads2,
    link: "http://samsung.com",
    id: 2
  }
];

const App = () => {
  return (
    <>
        <Carousel />
        <Title>Destaques</Title>
        <div className="products-list">
          <Card
            photo={product}
            title="Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0"
            price="R$ 1.299,00"
            instalments="10x de R$ 129,90 sem juros"
          />
          <Card
            photo={product}
            title="Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0"
            price="R$ 1.299,00"
            instalments="10x de R$ 129,90 sem juros"
          />
          <Card
            photo={product}
            title="Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0"
            price="R$ 1.299,00"
            instalments="10x de R$ 129,90 sem juros"
          />
          <Card
            photo={product}
            title="Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0"
            price="R$ 1.299,00"
            instalments="10x de R$ 129,90 sem juros"
          />
        </div>

        <Ads advertisements={adsList} />

        <Title>Melhores ofertas</Title>

        <div className="products-list">
          <Card
            photo={product}
            title="Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0"
            price="R$ 1.299,00"
            instalments="10x de R$ 129,90 sem juros"
          />
          <Card
            photo={product}
            title="Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0"
            price="R$ 1.299,00"
            instalments="10x de R$ 129,90 sem juros"
          />
          <Card
            photo={product}
            title="Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0"
            price="R$ 1.299,00"
            instalments="10x de R$ 129,90 sem juros"
          />
          <Card
            photo={product}
            title="Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0"
            price="R$ 1.299,00"
            instalments="10x de R$ 129,90 sem juros"
          />
        </div>
    </>

  );
}

export default App;
