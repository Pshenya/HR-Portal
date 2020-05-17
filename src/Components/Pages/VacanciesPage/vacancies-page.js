import React, { Component } from 'react';

import { connect } from "react-redux";

import './vacancies-page.css';

import VacSearchBlock from "./vac-search-block";
import VacanciesPageItem from "./vacancies-page-item";
import { assetsActions } from "../../../Actions";

import { Form } from "react-bootstrap";
import RoomIcon from "@material-ui/icons/Room";
import Loading from "../../Loading/loading";
import ErrorIndicator from "../../ErrorIndicator/error-indicator";

const VacanciesPage = ({vacanciesList}) => {
    return (
        <div className="vac-content">
            <VacSearchBlock/>
            <div className="vac-main">
                <div className="vac-main-wrapper">
                    <section className="vac-leftContent">
                        {
                            vacanciesList.map((vacancy) => {
                                return <div key={vacancy._id}>
                                    <VacanciesPageItem vacancy={vacancy}/>
                                </div>
                            })
                        }
                    </section>
                    <aside className="vac-aside-wrapper">
                        <div className="vac-rightContent">
                            <div className="vac-sidebar">
                                <div className="vac-sidebar-categories">
                                    <h3>Категория</h3>
                                    <Form.Control as="select" custom>
                                        <option>Все категории</option>
                                    </Form.Control>
                                </div>
                                <div className="sidebar-divider"/>
                                <div className="vac-sidebar-schedule">
                                    <h3>Занятость: </h3>
                                    <Form>
                                        {['radio'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`Полная занятость`}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    label={`Практика/стажирвка`}
                                                    id={`default-${type}`}
                                                />
                                                <Form.Check
                                                    type={type}
                                                    label={`Неполная занятость`}
                                                    id={`default-${type}`}
                                                />
                                                <Form.Check
                                                    type={type}
                                                    label={`Удаленная работа`}
                                                    id={`default-${type}`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
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
                                <div className="sidebar-divider"/>
                                <div className="vac-sidebar-workLevel">
                                    <h3>Уровень должности: </h3>
                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`Полная занятость`}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    label={`Практика/стажирвка`}
                                                    id={`default-${type}`}
                                                />
                                                <Form.Check
                                                    type={type}
                                                    label={`Неполная занятость`}
                                                    id={`default-${type}`}
                                                />
                                                <Form.Check
                                                    type={type}
                                                    label={`Удаленная работа`}
                                                    id={`default-${type}`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

class VacanciesPageContainer extends Component {
    componentDidMount() {
        this.props.getAllVacancies();
    }

    render() {
        const {vacanciesList, loading, error} = this.props;
        if (loading)
            return (
                <div className="vacPage-loading">
                    <Loading/>
                </div>
            );
        if (error) return <ErrorIndicator/>;
        return <VacanciesPage vacanciesList={vacanciesList}/>
    }
}


const mapStateToProps = ({assets}) => {
    return {
        vacanciesList: assets.vacanciesList,
        loading: assets.loading,
        error: assets.error
    }
};

const mapDispatchToProps = {
    getAllVacancies: assetsActions.getAllVacancies
};


export default connect(mapStateToProps, mapDispatchToProps)(VacanciesPageContainer);