import React, {Component} from 'react';
import Title from '../../components/Title';
import Card from '../../components/Card';
import product from '../../images/product.jpg';
import Ads from '../../components/Ads';
import ads3 from '../../images/ads3.jpg';
import './style.scss';


const adsList = [
  {
    image: ads3,
    link: "http://intel.com.br",
    id: 3
  }
];


class Products extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <>
        <Ads advertisements={adsList} />
        
        <Title>Produtos</Title>
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
    )
  };


};

export default Products;
