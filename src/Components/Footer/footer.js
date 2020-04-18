import React from "react";

import './footer.css';

import { Link } from "react-router-dom";

const Footer = () => {
    return (
            <footer className="footer">
                <div className="main-content">
                    <div className="footer-content">
                        <div className="info">
                            <p className="footer-logo">LOGO</p>
                            <p>2020 © HR Portal</p>
                        </div>
                        <nav className="menu-container">
                            <div className="menu-footer">
                                <ul className="menu">
                                    <li><Link to="/about">О проекте</Link></li>
                                    <li><Link to="/commercial">Реклама</Link></li>
                                    <li><Link to="/co-working">Сотрудничество</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;