import React from "react";

import './footer.css';

import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes/routes";

import {faFacebookF, faGithub, faLinkedinIn, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from '../../assets/img/MIIIIIIIIIIII.jpg';



const Footer = () => {
    return (
            <footer className="footer">
                <div className="content-container main-content">
                    <div className="footer-content">
                        <div className="info">
                            <img src={Logo} alt="Logo" height={30} width={100}/>
                            <p style={{marginBottom: '0'}}>2020 © <Link to={ROUTES.MAIN}>HR Portal</Link></p>
                        </div>
                        <ul className="footer-socials">
                            <li><a href="#"><FontAwesomeIcon className="footer-icon" icon={faFacebookF}/></a></li>
                            <li><a href="#"><FontAwesomeIcon className="footer-icon" icon={faLinkedinIn}/></a></li>
                            <li><a href="#"><FontAwesomeIcon className="footer-icon github-icon" icon={faGithub}/></a></li>
                            <li><a href="#"><FontAwesomeIcon className="footer-icon telegram-icon" icon={faTelegramPlane}/></a></li>
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
