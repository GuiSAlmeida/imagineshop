import React from 'react';
import './style.scss';
import Container from '../Container';
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-content">
                    <img className="footer-logo" src={logo} alt="Imagine Shop" />

                    <ul className="footer-social">
                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                    </ul>
                </div>

                <div className="footer-copyright">
                    Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 - imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Coqueiros - Florianópolis/SC
                </div>
            </Container>
        </footer>
    )
}

export default Footer;