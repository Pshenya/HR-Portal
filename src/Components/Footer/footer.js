import React from "react";

import './footer.css';

import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes/routes";

import { faFacebook, faFacebookF, faGithub, faGoogle, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
            <footer className="footer">
                <div className="main-content">
                    <div className="footer-content">
                        <div className="info">
                            <p className="footer-logo">LOGO</p>
                            <p style={{marginBottom: '0'}}>2020 © <Link to={ROUTES.MAIN}>HR Portal</Link></p>
                        </div>
                        <ul className="footer-socials">
                            <li><FontAwesomeIcon className="footer-icon" icon={faFacebookF} size="2x"/></li>
                            <li><FontAwesomeIcon className="footer-icon" icon={faLinkedin} size="2x"/></li>
                            <li><FontAwesomeIcon className="footer-icon" icon={faGithub} size="2x"/></li>
                            <li><FontAwesomeIcon className="footer-icon" icon={faTelegram} size="2x"/></li>
                        </ul>
                        <nav className="menu-container">
                                <ul className="menu">
                                    <li><Link to="/about">О проекте</Link></li>
                                    <li>Пишите нам на <a className="footer-email" href="mailto:support@hr-portal.ua">support@hr-portal.ua</a></li>
                                </ul>
                        </nav>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;