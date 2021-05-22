import React, {Component} from "react";

import './vacancy-details.css';

import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {assetsActions} from "../../../../Actions";
import {formatDate} from "../../../Helpers";
import Loading from "../../../Loading/loading";
import ErrorIndicator from "../../../ErrorIndicator/error-indicator";

import {MDBIcon} from "mdbreact";
import {ROUTES} from "../../../../Routes/routes";

const VacancyDetails = ({vacancyData}) => {
    return (
        <div className="main-center">
            <div className="vac-main">
                <div className="link-back">
                    <span>
                        <Link to={ROUTES.VACANCIES} className="disable-link-styles vac-back-link">
                        <MDBIcon icon="arrow-circle-left" style={{marginRight: '5px'}}/>
                        Назад
                        </Link>
                    </span>
                </div>
                <div className="vac-details-card">
                    <div className="vac-top-action">
                        <div className="vac-action-card">
                            <ul className="vac-action-list-inline">
                                <li>
                                    <form action="http://localhost:3000/api/resumes/upload" method="post" encType="multipart/form-data">
                                        <input type="file" name="filedata"/>
                                        <input type="submit" value="Send" />
                                    </form>
                                    <button className="vac-btn">Отправить резюме</button>
                                </li>
                                <li>
                                    <MDBIcon far icon="heart" style={{fontSize: '25px', color: '#2bbbad'}}/>
                                    {/*<div className="heart-icon"></div>*/}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="vac-details-card-main">
                        <div className="vac-details-card-date">
                            <span>{formatDate(vacancyData.date)}</span>
                        </div>
                        <h1 className="vac-details-card-title">{vacancyData.heading}</h1>
                        <span className="vac-details-card-company">
                            <MDBIcon icon="briefcase" style={{fontSize: '22px', marginRight: '7px', color: '#EA3C53'}}/>
                            {vacancyData.company}
                        </span>
                        <span className="vac-details-card-salary">
                            ${vacancyData.salary}
                        </span>
                        <span
                            className="vac-details-card-employment"><strong>Занятость:</strong> {vacancyData.employment}</span>

                        <div className="vac-details-card-info">
                            <span>
                                <i style={{fontSize: '25px', marginRight: '10px', color: "#EA3C53"}}className="fas fa-map-marker-alt"></i>
                                Киев
                            </span>
                            <span>
                                <MDBIcon icon="address-book" style={{marginRight: '9px', color: "#EA3C53"}}/>
                                Контакт
                            </span>
                            <span>
                                <i style={{fontSize: '28px', margin: '5px 11px 0 0', color: "#EA3C53"}} className="fas fa-mobile-alt"></i>
                                Контактный номер
                            </span>
                            <span>
                                <MDBIcon icon="envelope"
                                         style={{fontSize: '20px', marginRight: '9px', color: "#EA3C53"}}/>
                                Почта
                            </span>
                            <span>
                                <i style={{fontSize: '20px', marginRight: '9px', color: "#EA3C53"}} className="fas fa-globe-americas"></i>
                                Сайт
                            </span>
                        </div>
                        <div className="vac-details-card-descr">
                            <span>Описание вакансии:</span>
                            <p>{vacancyData.description}</p>
                        </div>
                        <div className="vac-details-sendCV">
                            <button className="vac-btn">Отправить резюме</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

class VacancyDetailsContainer extends Component {
    componentDidMount() {
        const vacancyID = this.props.match.params.vacancyID;
        this.props.getVacancy(vacancyID);
    }

    render() {
        const {vacancyData, loading, error} = this.props;
        if (loading) {
            return (
                <div className="vacPage-loading">
                    <Loading/>
                </div>
            )
        }
        if (error) {
            return (
                <div className="vacPage-error">
                    <ErrorIndicator/>
                </div>
            )
        }
        return <VacancyDetails vacancyData={vacancyData}/>
    };
}

const mapStateToProps = ({assets}) => {
    return {
        vacancyData: assets.vacancyData,
        loading: assets.loading,
        error: assets.error
    }
};

const mapDispatchToProps = {
    getVacancy: assetsActions.getVacancyById
};

withRouter(VacancyDetailsContainer);

export default connect(mapStateToProps, mapDispatchToProps)(VacancyDetailsContainer);
