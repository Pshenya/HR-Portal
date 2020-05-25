import React, { Component } from 'react';

import { withStyles } from "../../Helpers/withStyles";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import WorkIcon from "@material-ui/icons/Work";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VacanciesPageItem from "./vacancies-page-item";
import { Form } from "react-bootstrap";


class VacanciesPage extends Component {
    constructor(props) {
        super(props);

        this.onSearch = this.onSearch.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.state = {
            searchInput: '',
            category: ''
        }
    }

    onSearch(e) {
        this.setState({
            searchInput: e.target.value
        });
    }

    handleRadioChange(e) {
        this.setState({category: e.target.value})
    }

    getUnique(arr, comp) {
        const unique = arr
            //store the comparison values in array
            .map(e => e[comp])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e])

            .map(e => arr[e]);

        return unique;
    }

    render() {
        const {stylesHook} = this.props;
        const classes = stylesHook;

        const {vacanciesList} = this.props;
        const {category} = this.state.category;
        let filteredVacancy = vacanciesList.filter(
            (vacancy) => {
                return (vacancy.heading.toLowerCase().includes(this.state.searchInput.toLowerCase())) || (vacancy.company.toLowerCase().includes(this.state.searchInput.toLowerCase()));
            }
        );
        const uniqueVacancy = this.getUnique(vacanciesList, "category");
        return (
            <div className="vac-content">
                <div className="search-header">
                    <div className="search-header-content d-flex">
                        <div className="search">
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Поиск"
                                    inputProps={{'aria-label': 'Поиск'}}
                                    value={this.state.searchInput}
                                    onChange={this.onSearch}
                                />
                                <IconButton className={classes.iconButton} aria-label="search">
                                    <SearchIcon/>
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical"/>
                                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                    <WorkIcon/>
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
                        <aside className="vac-aside-wrapper">
                            <div className="vac-rightContent">
                                <div className="vac-sidebar">
                                    <div className="vac-sidebar-categories">
                                        <h3>Категория</h3>
                                        <select className="vac-sidebar-select" value={this.state.category}
                                                onChange={this.handleRadioChange}>
                                            <option value=''>Все категории</option>
                                            <option value="IT">IT</option>
                                        </select>
                                    </div>
                                    <div className="sidebar-divider"/>
                                    <div className="vac-sidebar-schedule">
                                        <h3>Занятость: </h3>
                                        <Form.Check
                                            type="radio"
                                            name="vac-radios"
                                            id='full'
                                            label="Полная занятость"
                                        />

                                        <Form.Check
                                            type="radio"
                                            name="vac-radios"
                                            label="Практика/стажирвка"
                                            id='practice'
                                        />
                                        <Form.Check
                                            type="radio"
                                            name="vac-radios"
                                            label="Неполная занятость"
                                            id='semi'
                                        />
                                        <Form.Check
                                            type="radio"
                                            name="vac-radios"
                                            label="Удаленная работа"
                                            id='remote'
                                        />
                                    </div>
                                    <div className="sidebar-divider"/>
                                    <div className="vac-sidebar-salary">
                                        <h3>Зарплата: </h3>
                                        <div className="salary-flex">
                                            <div className="salary-input-line">
                                                <span>от</span>
                                                <input className="salary-input" type="text"/>
                                                <span>грн.</span>
                                                <button type="button" className="salary-input-btn">OK</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <section className="vac-leftContent">
                            {
                                filteredVacancy.map((vacancy) => {
                                    return <div key={vacancy._id}>
                                        <VacanciesPageItem vacancy={vacancy}/>
                                    </div>
                                })
                            }
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(VacanciesPage);