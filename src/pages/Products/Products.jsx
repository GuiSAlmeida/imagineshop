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
            photo={product3}
            title="Smart TV LED 55 Samsung Ultra HD 4k 55NU7100"
            price="R$ 2.944,99"
            instalments="10x de R$ 309,99 sem juros"
          />
          <Card
            photo={product4}
            title="Notebook Samsung Expert VF3BR Intel Core i7 8GB"
            price="R$ 2.699,99"
            instalments="10x de R$ 299,90 sem juros"
          />
          <Card
            photo={product5}
            title="Lava E Seca Samsung 11kg Com 12 Programas De Lavagem"
            price="R$ 2.949,90"
            instalments="10x de R$ 294,90 sem juros"
          />
          <Card
            photo={product6}
            title="iPhone 7 Plus 32GB Ouro Rosa Tela Retina HD 5,5"
            price="R$ 3.299,00"
            instalments="10x de R$ 329,90 sem juros"
          />
          <Card
            photo={product7}
            title="Liquidificador Philips Walita Problend Preto RI2134/9"
            price="R$ 139,99"
            instalments="6x de R$ 23,33 sem juros"
          />
          <Card
            photo={product8}
            title="Monitor Gamer LED 49 Curvo 1ms 144hz Double Full HD"
            price="R$ 5.999,99"
            instalments="10x de R$ 599,90 sem juros"
          />
          <Card
            photo={product9}
            title="PC Gamer EasyPC FPS Intel Core i3 8GB 1TB"
            price="R$ 1.899,00"
            instalments="10x de R$ 189,90 sem juros"
          />
        </div>

        
      </>
    )
  };


};

export default Products;
