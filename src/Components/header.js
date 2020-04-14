import React, { Component } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';

import './header.css'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: '2px 2px',
//         display: 'flex',
//         alignItems: 'center',
//         width: 400,
//     },
//     input: {
//         marginLeft: theme.spacing(1),
//         flex: 1,
//     },
//     iconButton: {
//         padding: 5,
//     },
// }));

export default function Header() {
    //const classes = useStyles();

    return (
        <Navbar collapseOnSelect expand="md" variant={"light"}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/comments">ОТЗЫВЫ</Nav.Link>
                        <Nav.Link href="/best-hr">ЛУЧШИЕ HR</Nav.Link>
                        <Nav.Link href="/vacancies">ВАКАНСИИ</Nav.Link>
                        <Nav.Link href="/stats">СТАТИСТИКА ЗП</Nav.Link>
                    </Nav>

                    {/*Поиск*/}


                    {/*<Paper component="form" className={classes.root}>*/}
                    {/*    <InputBase*/}
                    {/*        className={classes.input}*/}
                    {/*        placeholder="Поиск"*/}
                    {/*        inputProps={{'aria-label': 'search google maps'}}*/}
                    {/*    />*/}
                    {/*    <IconButton type="submit" className={classes.iconButton} aria-label="search">*/}
                    {/*        <SearchIcon/>*/}
                    {/*    </IconButton>*/}
                    {/*</Paper>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

