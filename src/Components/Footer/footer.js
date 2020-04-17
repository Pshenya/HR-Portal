import React from "react";

import './footer.css';
import { Navbar } from "react-bootstrap";

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
                                <li><a href="/about">О проекте</a></li>
                                <li><a href="/about">Реклама</a></li>
                                <li><a href="/about">Сотрудничество</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;