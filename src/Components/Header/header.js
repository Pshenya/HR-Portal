import React from 'react';

import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import TopBar from "./top-bar";

import './header.css'


export default function Header() {

    return (
        <div className="header">
            <header>
                <TopBar/>
                <Navbar collapseOnSelect expand="sm">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to="/comments">ОТЗЫВЫ</Nav.Link>
                                <Nav.Link as={Link} to="/ratings">ЛУЧШИЕ HR</Nav.Link>
                                <Nav.Link as={Link} to="/vacancies">ВАКАНСИИ</Nav.Link>
                                <Nav.Link as={Link} to="/stats">СТАТИСТИКА ЗП</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

