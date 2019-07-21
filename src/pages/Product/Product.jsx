import React, {Component} from 'react';
import Title from '../../components/Title';
import Card from '../../components/Card';
import product6 from '../../images/product6.jpg';
import product7 from '../../images/product7.jpg';
import product8 from '../../images/product8.jpg';
import product9 from '../../images/product9.jpg';
import productImage from '../../images/product2.jpg';
import Ads from '../../components/Ads';
import ads3 from '../../images/ads3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';


const adsList = [
  {
    image: ads3,
    link: "http://intel.com.br",
    id: 3
  }
];

class Product extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <>
        <Ads advertisements={adsList} />
        <section className="product-header">
          <div className="product-image">
            <img src={productImage} alt="Foto do produto"/>
          </div>

          <div className="product-overview">
            <h1>Notebook Samsung Expert VF3BR Intel Core i7 8GB</h1>

            <div className="product-price">
              <span>R$ 2.699,99</span>
              <small>10x de R$ 299,99 sem juros</small>
            </div>

            <button className="product-button-buy">
              <FontAwesomeIcon icon="shopping-cart" size="lg" />
              Adicionar ao carrinho
            </button>

            <p>O Samsung Expert é o notebook voltado para pessoas dinâmicas que buscam um computador que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança. A placa de vídeo NVIDIA GeForce oferece alto desempenho gráfico para aplicações como jogos e softwares 3D.</p>
          </div>
        </section>

        <section className="product-description">
          <Title>Informações do produto</Title>

          <div>
            <p>O Samsung Expert é o notebook voltado para pessoas dinâmicas que buscam um computador que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança. A placa de vídeo NVIDIA GeForce oferece alto desempenho gráfico para aplicações como jogos e softwares 3D.</p>
            Imagens Meramente Ilustrativas.
            <p>Todas as Informações divulgadas são de responsabilidade do Fabricante/Fornecedor. Verifique com os fabricantes do produto e de seus componentes eventuais limitações à utilização de todos os recursos e funcionalidades.</p>
          </div>
        </section>

        <section className="product-list">
          <Title>Veja também</Title>

          <div className="products-list">
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
        </section>

      </>
    )
  };
}

export default Product;
