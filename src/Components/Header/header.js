import React, { Component } from 'react';

import './header.css';

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ROUTES } from "../../Routes/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { userActions } from "../../Actions";

import Logo from '../../assets/img/MIIIIIIIIIIII.jpg';

class Header extends Component {
    componentDidMount() {
        this.props.getUser();
    }

    render() {
        const {loggedIn, userData, logout} = this.props;

        return (
            <div className="header">
                <header>
                    <Navbar collapseOnSelect expand="sm">
                        <Container fluid>
                            <Navbar.Brand className="nav-logo">
                                <Link to="/">
                                    <img style={{paddingTop: "8px"}} src={Logo} alt="logo" width={200} height={75}/>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav>
                                    <Nav.Link as={Link} to={ROUTES.SEARCH}>ПОИСК</Nav.Link>
                                    <Nav.Link as={Link} to={ROUTES.RATINGS}>РЕЙТИНГИ</Nav.Link>
                                    <Nav.Link as={Link} to={ROUTES.VACANCIES}>ВАКАНСИИ</Nav.Link>
                                    <Nav.Link as={Link} to={ROUTES.STATS}>СТАТИСТИКА ЗП</Nav.Link>
                                </Nav>
                                {loggedIn &&
                                <div className="d-flex">
                                    <Link className="header-icon d-flex" to={ROUTES.PROFILE}>
                                        <h3>{userData.name}</h3>
                                        <FontAwesomeIcon className="icon" title="Мой профиль" icon={faUserCircle}/>
                                    </Link>
                                    <FontAwesomeIcon title='Выход' style={{marginTop: '.5rem', cursor: 'pointer'}}
                                                     onClick={logout}
                                                     icon={faSignOutAlt}/>
                                </div>
                                }
                                { !loggedIn &&
                                <Link to={ROUTES.LOGIN}>
                                    <Button className="login-btn">Вход</Button>
                                </Link>}


                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        userData: state.users.userData
    }
};

const mapDispatchToProps = {
    logout: userActions.logout,
    getUser: userActions.getUserData
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);

