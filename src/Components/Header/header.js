import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import TopBar from "./top-bar";

import './header.css'


export default function Header() {

    return (
        <React.Fragment>

            <TopBar/>

            <Navbar className="main-header" collapseOnSelect expand="sm" variant={"light"}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/comments">ОТЗЫВЫ</Nav.Link>
                            <Nav.Link href="/best-hr">ЛУЧШИЕ HR</Nav.Link>
                            <Nav.Link href="/vacancies">ВАКАНСИИ</Nav.Link>
                            <Nav.Link href="/stats">СТАТИСТИКА ЗП</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

