import React from 'react';

import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import TopBar from "./top-bar";

import './header.css'
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 2px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 5,
    },
}));

export default function Header() {

    const classes = useStyles();

    return (
        <div className="header">
            <header>
                <Navbar collapseOnSelect expand="sm">
                    <Container fluid>
                        <Navbar.Brand className="nav-logo">
                            <h1 className="d-inline-block align-top logo">
                                <Link to="/">LOGO</Link>
                            </h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to="/comments">ОТЗЫВЫ</Nav.Link>
                                <Nav.Link as={Link} to="/ratings">ЛУЧШИЕ HR</Nav.Link>
                                <Nav.Link as={Link} to="/vacancies">ВАКАНСИИ</Nav.Link>
                                <Nav.Link as={Link} to="/stats">СТАТИСТИКА ЗП</Nav.Link>
                            </Nav>
                            <div className="flex-placeholder"></div>
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Поиск"
                                    inputProps={{'aria-label': 'search'}}
                                />
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon/>
                                </IconButton>
                            </Paper>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

