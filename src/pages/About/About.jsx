import React from 'react';
import Title from '../../components/Title';
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

const About = () => {
  window.scrollTo(0,0);

  return (
    <>
      <Ads advertisements={adsList} />
      <Title>Sobre</Title>

      <div className="about-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint, in omnis itaque reiciendis eaque. Pariatur, dolorem. A asperiores quam culpa repudiandae omnis dolore cupiditate libero, temporibus repellendus consectetur porro.</p>
        <p>Enim qui non unde numquam ut, odit aperiam adipisci aut molestias, ad sed praesentium soluta vel dolor accusantium obcaecati quibusdam consequatur repudiandae, quaerat blanditiis! Iusto minus numquam unde aut libero.</p>
        <p>Esse exercitationem cupiditate laborum, omnis vero impedit nisi reprehenderit eos quis nam incidunt amet rem ipsum at numquam molestiae! Ab, hic eaque. Libero qui laboriosam repudiandae praesentium temporibus consectetur doloribus.</p>
        <p>Blanditiis deleniti rem aut odio itaque sunt, voluptates illo error impedit sint numquam! Quisquam nam magni laudantium voluptates ipsa eos! Explicabo velit rerum id dicta dolorem eos officiis iusto cum?</p>
        <p>Deleniti nisi dolorem porro dolore mollitia atque excepturi unde nulla. Earum laudantium quisquam unde aspernatur, ipsa asperiores nostrum consequatur et quaerat voluptatum adipisci libero, rerum quam voluptas maiores porro molestiae.</p>
      </div>
        
    </>

  );
}

export default About;
