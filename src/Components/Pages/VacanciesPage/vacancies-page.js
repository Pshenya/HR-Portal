import React, { Component } from 'react';

import './vacancies-menus.css';

import NoSearchResults from "../../NoSearchResults/nosearchresults";
import { withStyles } from "../../Helpers";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import WorkIcon from "@material-ui/icons/Work";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VacanciesPageItem from "./vacancies-page-item";
import { Form } from "react-bootstrap";
import {element} from "prop-types";
import SearchPageItem from "../SearchPage/search-page-item";


class VacanciesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: '',
            category: '',
            region: '',
            showRegions: false,
            showCategories: false,
            showCompanies: false
        }

        this.onSearch = this.onSearch.bind(this);
        this.showRegions = this.showRegions.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showCategories = this.showCategories.bind(this);
        this.showCompanies = this.showCompanies.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.handleRegion = this.handleRegion.bind(this);

    }

    onSearch(e) {
        this.setState({
            searchInput: e.target.value
        });
    }

    showRegions(e){
        e.preventDefault();

        this.setState({showRegions: true}, () => {
            document.addEventListener('click', this.closeMenu)
        })
    }

    showCategories(e){
        e.preventDefault();

        this.setState({showCategories: true}, () => {
            document.addEventListener('click', this.closeMenu)
        })
    }

    showCompanies(e){
        e.preventDefault();

        this.setState({showCompanies: true}, () => {
            document.addEventListener('click', this.closeMenu)
        })
    }

    closeMenu(e){
            this.setState({showRegions: false, showCompanies: false, showCategories: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });

    }

    handleCategory(e){
        if(e.target.value === 'Всі категорії'){
            this.setState({
                category: ''
            })
        } else {
            this.setState({
                category: e.target.value
            });
        }
    }

    handleRegion(e){
        console.log(e.target.value)
        if(e.target.value === 'Всі регіони'){
            this.setState({
                region: ''
            })
        } else {
            this.setState({
                region: e.target.value
            });
        }
    }

    render() {
        const {stylesHook} = this.props;
        const classes = stylesHook;

        const setting = "вакансій";

        const {vacanciesList} = this.props;
        console.log(this.state)
        let filteredVacancy = vacanciesList.filter(
            (vacancy) => {
                return (vacancy.category.toLowerCase().includes(this.state.category.toLowerCase()) &&
                    vacancy.heading.toLowerCase().includes(this.state.searchInput.toLowerCase()) &&
                    vacancy.region.toLowerCase().includes(this.state.region.toLowerCase()))
                    || (vacancy.category.toLowerCase().includes(this.state.category.toLowerCase()) &&
                    vacancy.company.toLowerCase().includes(this.state.searchInput.toLowerCase()) &&
                        vacancy.region.toLowerCase().includes(this.state.region.toLowerCase()))

            }
        );

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
                                <IconButton style={{color: "#d23a5d"}} onClick={this.showRegions} className={classes.iconButton} aria-label="directions">
                                    <WorkIcon/>
                                    <h3 style={{marginLeft: '5px', fontSize: '1.5rem'}}>
                                        {
                                            this.state.region === ''
                                            ? ("Всі регіони")
                                                : this.state.region
                                        }
                                    </h3>
                                    <ExpandMoreIcon/>
                                    {this.state.showRegions
                                        ? (
                                            <div className="regions-dropdown-menu">
                                                <button value={"Київ"} onClick={e => this.handleRegion(e, "value")}>Київ</button>
                                                <button value={"Харків"} onClick={e => this.handleRegion(e, "value")}>Харків</button>
                                                <button value={"Дніпро"} onClick={e => this.handleRegion(e, "value")}>Дніпро</button>
                                                <button value={"Запоріжжя"} onClick={e => this.handleRegion(e, "value")}>Запоріжжя</button>
                                                <button value={"Львів"} onClick={e => this.handleRegion(e, "value")}>Львів</button>
                                                <button value={"Одеса"} onClick={e => this.handleRegion(e, "value")}>Одеса</button>
                                                <button value={"Всі регіони"} onClick={e => this.handleRegion(e, "value")}>Всі регіони</button>
                                            </div>
                                        )
                                        : null}
                                </IconButton>
                            </Paper>
                        </div>
                        <ul className="header-list">
                            <li onClick={this.showCategories} className="d-flex">
                                <span>Категории</span>
                                <ExpandMoreIcon style={{paddingBottom: '3px'}}/>
                                {this.state.showCategories
                                    ? (
                                        <div className="dropdown-menu">
                                            <button value={"HR/Рекрутинг"} onClick={e => this.handleCategory(e, "value")}>HR/Рекрутинг</button>
                                            <button value={"IT"} onClick={e => this.handleCategory(e, "value")}>IT</button>
                                            <button value={"Готелі - Ресторани - Кафе"} onClick={e => this.handleCategory(e, "value")}>Готелі - Ресторани - Кафе</button>
                                            <button value={"Дизайн - Фото - Графіка"} onClick={e => this.handleCategory(e, "value")}>Дизайн - Фото - Графіка</button>
                                            <button value={"Всі категорії"} onClick={e => this.handleCategory(e, "value")}>Всі категорії</button>
                                        </div>
                                    )
                                    : null}
                            </li>
                            {/*<li onClick={this.showCompanies} className="d-flex">*/}
                            {/*    <span>Компании</span>*/}
                            {/*    <ExpandMoreIcon style={{paddingBottom: '3px'}}/>*/}
                            {/*    {this.state.showCompanies*/}
                            {/*        ? (*/}
                            {/*            <div className="dropdown-menu" ref={(element) => {*/}
                            {/*                this.dropDownMenu = element;*/}
                            {/*            }}>*/}
                            {/*                <button>Menu item 1</button>*/}
                            {/*                <button>Menu item 2</button>*/}
                            {/*                <button>Menu item 3</button>*/}
                            {/*            </div>*/}
                            {/*        )*/}
                            {/*        : null}*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
                <div className="vac-main">
                    <div className="vac-main-wrapper">
                        {/*<aside className="vac-aside-wrapper">*/}
                        {/*    <div className="vac-rightContent">*/}
                        {/*        <div className="vac-sidebar">*/}
                        {/*            <div className="vac-sidebar-categories">*/}
                        {/*                <h3>Категория</h3>*/}
                        {/*                <select className="vac-sidebar-select">*/}
                        {/*                    <option>Все категории</option>*/}
                        {/*                    <option>IT</option>*/}
                        {/*                </select>*/}
                        {/*            </div>*/}
                        {/*            <div className="sidebar-divider"/>*/}
                        {/*            <div className="vac-sidebar-schedule">*/}
                        {/*                <h3>Занятость: </h3>*/}
                        {/*                <Form.Check*/}
                        {/*                    type="radio"*/}
                        {/*                    name="vac-radios"*/}
                        {/*                    id='full'*/}
                        {/*                    label="Полная занятость"*/}
                        {/*                />*/}

                        {/*                <Form.Check*/}
                        {/*                    type="radio"*/}
                        {/*                    name="vac-radios"*/}
                        {/*                    label="Практика/стажирвка"*/}
                        {/*                    id='practice'*/}
                        {/*                />*/}
                        {/*                <Form.Check*/}
                        {/*                    type="radio"*/}
                        {/*                    name="vac-radios"*/}
                        {/*                    label="Неполная занятость"*/}
                        {/*                    id='semi'*/}
                        {/*                />*/}
                        {/*                <Form.Check*/}
                        {/*                    type="radio"*/}
                        {/*                    name="vac-radios"*/}
                        {/*                    label="Удаленная работа"*/}
                        {/*                    id='remote'*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*            <div className="sidebar-divider"/>*/}
                        {/*            <div className="vac-sidebar-salary">*/}
                        {/*                <h3>Зарплата: </h3>*/}
                        {/*                <div className="salary-flex">*/}
                        {/*                    <div className="salary-input-line">*/}
                        {/*                        <span>от</span>*/}
                        {/*                        <input className="salary-input" type="text"/>*/}
                        {/*                        <span>грн.</span>*/}
                        {/*                        <button type="button" className="salary-input-btn">OK</button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</aside>*/}
                        <section className="vac-leftContent">
                            {
                                filteredVacancy.length !== 0 ?
                                filteredVacancy.map((vacancy) => {
                                     return <div key={vacancy._id}>
                                        <VacanciesPageItem vacancy={vacancy}/>
                                    </div>
                                }) : <NoSearchResults setting={setting}/>
                            }
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(VacanciesPage);
