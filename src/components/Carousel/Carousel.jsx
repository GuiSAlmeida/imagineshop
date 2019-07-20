import React from 'react';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import './style.scss';

const Carousel = props => {
    const settings = {
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        dots: true,
        dotsClass: "banner-dots"
    };

    return (
        <section className="carousel">
            <Slider {...settings}>
                <img src={banner1} alt="banner1" />
                <img src={banner2} alt="banner2" />
                <img src={banner3} alt="banner3" />
            </Slider>
        </section>

    )
}

export default Carousel;