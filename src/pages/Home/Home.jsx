import React, {Component} from 'react';
import Title from '../../components/Title';
import Card from '../../components/Card';
import product from '../../images/product.jpg';
import product3 from '../../images/product3.jpg';
import product4 from '../../images/product4.jpg';
import product5 from '../../images/product5.jpg';
import product6 from '../../images/product6.jpg';
import product7 from '../../images/product7.jpg';
import product8 from '../../images/product8.jpg';
import product9 from '../../images/product9.jpg';
import Ads from '../../components/Ads';
import ads1 from '../../images/ads1.jpg';
import ads2 from '../../images/ads2.jpg';
import Carousel from '../../components/Carousel';
import './style.scss';
import products from '../../products.js';


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

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <>
        <Carousel />
        <Title>Destaques</Title>
        <div className="products-list">
          {products.map(product => (
            <Card
              photo={product.photo}
              title={product.title}
              price={product.price}
              instalments={product.instalments}
              id={product.id}
              key={product.id}
            />
          )).filter((_, index) => {
              return (index < 4);
            })
          }

        </div>

        <Ads advertisements={adsList} />

        <Title>Melhores ofertas</Title>

        <div className="products-list">
          {products.map(product => (
            <Card
              photo={product.photo}
              title={product.title}
              price={product.price}
              instalments={product.instalments}
              id={product.id}
              key={product.id}
            />
          )).filter((_, index) => {
            return (index >= 4);
          })
          }

        </div>
      </>
    )
  };


};

export default Home;
