import React, { Component } from 'react';

import './vacancies-page.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { Form } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 10px',
        marginRight: '24px',
        display: 'flex',
        alignItems: 'center',
        width: 900,
    },
    input: {
        fontSize: '1.5rem',
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

function VacanciesPage() {
    const classes = useStyles();

    return (
        <div className="vac-content">
            <div className="vac-header">
                <div className="vac-header-content d-flex">
                    <div className="vac-search">
                        <Paper component="form" className={classes.root}>
                            <InputBase
                                className={classes.input}
                                placeholder="Поиск"
                                inputProps={{'aria-label': 'Поиск'}}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon/>
                            </IconButton>
                            <Divider className={classes.divider} orientation="vertical"/>
                            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                <RoomIcon/>
                                <h3 style={{marginLeft: '5px', fontSize: '1.5rem'}}>Все регионы</h3>
                                <ExpandMoreIcon/>
                            </IconButton>
                        </Paper>
                    </div>
                    <ul className="header-list">
                        <li className="d-flex">
                            <span>Категории</span>
                            <ExpandMoreIcon style={{paddingBottom: '3px'}}/>
                        </li>
                        <li className="d-flex">
                            <span>Компании</span>
                            <ExpandMoreIcon style={{paddingBottom: '3px'}}/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="vac-main">
                <div className="vac-main-wrapper">
                    <section className="vac-leftContent">
                        <div id="1">
                            <article className="vac-card">
                                <div className="vac-card-body">
                                    <div className="card-main-content">
                                        <div className="common-info">
                                            <h3 className="vac-card-title">Title</h3>
                                            <p className="company-name">Company</p>
                                            <span className="salary">40&nbsp;000 грн</span>
                                            <span className="location">
                                                <RoomIcon style={{marginRight: '5px'}}/>
                                                Киев
                                            </span>
                                        </div>
                                    </div>
                                    <div className="vac-card-description">
                                        Compamy - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti ea ipsum, odio quae repellat reprehenderit! Beatae, cupiditate distinctio eius est, fugit itaque possimus praesentium quibusdam quod rerum tempore ullam?
                                    </div>
                                </div>
                                <div className="vac-card-footer">
                                    <div className="publication-time">
                                        30 минут назаж
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div id="2">
                            <article className="vac-card">
                                <div className="vac-card-body">
                                    <div className="card-main-content">
                                        <div className="common-info">
                                            <h3 className="vac-card-title">Title</h3>
                                            <p className="company-name">Company</p>
                                            <span className="salary">40&nbsp;000 грн</span>
                                            <span className="location">
                                                <RoomIcon style={{marginRight: '5px'}}/>
                                                Киев
                                            </span>
                                        </div>
                                    </div>
                                    <div className="vac-card-description">
                                        Compamy - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti ea ipsum, odio quae repellat reprehenderit! Beatae, cupiditate distinctio eius est, fugit itaque possimus praesentium quibusdam quod rerum tempore ullam?
                                    </div>
                                </div>
                                <div className="vac-card-footer">
                                    <div className="publication-time">
                                        30 минут назаж
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div id="3">
                            <article className="vac-card">
                                <div className="vac-card-body">
                                    <div className="card-main-content">
                                        <div className="common-info">
                                            <h3 className="vac-card-title">Title</h3>
                                            <p className="company-name">Company</p>
                                            <span className="salary">40&nbsp;000 грн</span>
                                            <span className="location">
                                                <RoomIcon style={{marginRight: '5px'}}/>
                                                Киев
                                            </span>
                                        </div>
                                    </div>
                                    <div className="vac-card-description">
                                        Compamy - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti ea ipsum, odio quae repellat reprehenderit! Beatae, cupiditate distinctio eius est, fugit itaque possimus praesentium quibusdam quod rerum tempore ullam?
                                    </div>
                                </div>
                                <div className="vac-card-footer">
                                    <div className="publication-time">
                                        30 минут назаж
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                    <aside className="vac-aside-wrapper">
                        <div className="vac-rightContent">
                            <div className="vac-sidebar">
                                <h3>Категория</h3>
                                <Form.Control as="select" custom>
                                    <option>Все категории</option>
                                </Form.Control>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default VacanciesPage;