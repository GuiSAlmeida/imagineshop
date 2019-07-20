import React from 'react';
import "./style.scss";
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Imagine Shop"/>

            <div className="header-nav">
                <nav className="header-menu">
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Produtos</a>
                </nav>

                <div className="header-cart">
                    <FontAwesomeIcon icon="shopping-cart" size="lg" />
                    <span>3</span>
                </div>
            </div>

        </header>
    )
};

export default Header;