import React, {Component} from 'react';

import './header.css';

import {connect} from "react-redux";

import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {ROUTES} from "../../Routes/routes";
import Loading from "../Loading/loading";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {userActions} from "../../Actions";

import Logo from '../../assets/img/MIIIIIIIIIIII.jpg';
import ErrorIndicator from "../ErrorIndicator/error-indicator";

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }
    componentDidMount() {
        this.props.getUser();
    }

    showMenu(e) {
        e.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu)
        })
    }

    closeMenu(e){
        this.setState({showMenu: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        const {loggedIn, userData, logout} = this.props;

        return (
            <header className="header">
                <div className="content-container">
                    <Navbar collapseOnSelect expand="lg">
                        <Container fluid>
                            <Navbar.Brand className="nav-logo">
                                <Link to="/">
                                    <img style={{paddingTop: "8px"}} src={Logo} alt="logo" width={200} height={75}/>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav>
                                    <Nav.Link as={Link} to={ROUTES.SEARCH}>ПОШУК</Nav.Link>
                                    <Nav.Link as={Link} to={ROUTES.RATINGS}>РЕЙТИНГИ</Nav.Link>
                                    <Nav.Link as={Link} to={ROUTES.VACANCIES}>ВАКАНСІЇ</Nav.Link>
                                    <Nav.Link as={Link} to={ROUTES.STATS}>СТАТИСТИКА ЗП</Nav.Link>
                                </Nav>
                                {loggedIn &&
                                    <div className="d-flex">
                                        <div className="header-icon d-flex" onClick={this.showMenu}>
                                            <h3>{userData.name}</h3>
                                            <FontAwesomeIcon className="icon" title="Мой профиль" icon={faUserCircle}/>
                                            {this.state.showMenu
                                                ? (
                                                    <div className="header-dropdown-menu">
                                                        <Link className="header-link" to={`${ROUTES.PROFILE}/${userData.userId}`}>Мій профіль</Link>
                                                        <Link className="header-link">Мої резюме</Link>
                                                        <Link className="header-link">Menu item</Link>
                                                    </div>
                                                )
                                                : null}
                                        </div>
                                        <FontAwesomeIcon title='Выход' style={{marginTop: '.5rem', cursor: 'pointer'}}
                                                         onClick={logout}
                                                         icon={faSignOutAlt}/>
                                    </div>
                                // <div className="d-flex">
                                //     <Link className="header-icon d-flex" to={`${ROUTES.PROFILE}/${userData.userId}`}>
                                //         <h3>{userData.name}</h3>
                                //         <FontAwesomeIcon className="icon" title="Мой профиль" icon={faUserCircle}/>
                                //         {this.state.showMenu
                                //                 ? (
                                //                     <div className="header-dropdown-menu">
                                //                         <button>Menu item</button>
                                //                         <button>Menu item</button>
                                //                         <button>Menu item</button>
                                //                     </div>
                                //                 )
                                //                 : null}}
                                //     </Link>
                                //     <FontAwesomeIcon title='Выход' style={{marginTop: '.5rem', cursor: 'pointer'}}
                                //                      onClick={logout}
                                //                      icon={faSignOutAlt}/>
                                // </div>
                                }
                                {!loggedIn &&
                                <Link to={ROUTES.LOGIN}>
                                    <button className="login-btn">Увійти</button>
                                </Link>}


                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </header>
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

