import React from 'react';
import "./style.scss";
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Imagine Shop"/>

            <div className="header-nav">
                <nav className="header-menu">
                    <Link to="/">Home</Link>
                    <Link to="/quem-somos">Sobre</Link>
                    <Link to="/produtos">Produtos</Link>
                </nav>

                <div className="header-cart">
                    <FontAwesomeIcon icon="shopping-cart" size="lg" />
                    <span>0</span>
                </div>
            </div>

        </header>
    )
};

export default Header;