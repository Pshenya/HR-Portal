import React, {Component, Fragment} from "react";

import './vacancy-details.css';

import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {assetsActions} from "../../../../Actions";
import {formatDate} from "../../../Helpers";
import Loading from "../../../Loading/loading";
import ErrorIndicator from "../../../ErrorIndicator/error-indicator";

import {MDBIcon} from "mdbreact";
import {ROUTES} from "../../../../Routes/routes";

import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import companyIcon from '../../../../assets/img/company-icon.png'


const VacancyDetails = ({vacancyData}) => {
    const currencyChange = (data) => {
        switch (data) {
            case 'Dollar':
                return '$'
            case 'Hryvnia':
                return '₴'
            case 'Euro':
                return '€'
        }
    }
    let ID = 1;
    console.log(vacancyData)
    if (Object.keys(vacancyData).length === 0) {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
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
                    <div className="vac-details-container" style={{display: 'flex'}}>
                        <div className="vac-details-card">
                            <div className="vac-top-action">
                                <div className="vac-action-card">
                                    <ul className="vac-action-list-inline">
                                        <li>
                                            <form action="http://localhost:3000/api/resumes/upload" method="post"
                                                  encType="multipart/form-data">
                                                <input type="file" name="filedata"/>
                                                <input type="submit" value="Send"/>
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
                                <div className="vac-details-card-salary">
                                    <span>{vacancyData.salary} {vacancyData.salaryCurrency}</span>
                                </div>
                                <div className="vac-details-card-address">
                                    <RoomOutlinedIcon style={{fontSize: '28px', color:'#EA3C53'}}/> <span style={{marginRight: '20px'}}>Адреса: </span> <span>{vacancyData.region}, {vacancyData.address}</span>
                                </div>
                                <div className="vac-details-card-contacts">
                                    <div className="contacts-heading">
                                        Контактна особа
                                    </div>
                                    <div className="contacts-content">
                                        <PersonOutlineOutlinedIcon style={{fontSize: '28px', color:'#EA3C53', marginBottom: '4px'}}/> <span>{vacancyData.contactPerson}</span>
                                    </div>
                                    <div className="contacts-content">
                                        <ChatOutlinedIcon style={{fontSize: '28px', color:'#EA3C53', marginBottom: '-2px'}}/> <span>{vacancyData.contactNumber} {vacancyData.contactMore ? <span>, {vacancyData.contactMore}</span> : ''}</span>
                                    </div>
                                </div>
                                <div className="vac-details-frame-container">
                                    <div className="vac-details-frame-block">
                                        <div className="frame-heading">Особливості вакансії</div>
                                        <div className="frame-content">
                                            <div className="frame-content-section">
                                                <span className="frame-section-heading">Тип зайнятості</span>
                                                <ul style={{marginLeft: '35px'}}>
                                                    {vacancyData.employment.map(el => {
                                                        return <li key={ID++}>{el}</li>
                                                    })
                                                    }
                                                </ul>
                                            </div>
                                            <div className="frame-content-section">
                                                <span className="frame-section-heading">Характер роботи</span>
                                                <ul style={{marginLeft: '35px'}}>
                                                    {vacancyData.workType.map(el => {
                                                        return <li key={ID++}>{el}</li>
                                                    })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<span*/}
                                {/*    className="vac-details-card-employment"><strong>Занятость:</strong> {vacancyData.employment}</span>*/}

                            {/*    <div className="vac-details-card-info">*/}
                            {/*        <span>*/}
                            {/*    <MDBIcon icon="address-book" style={{marginRight: '9px', color: "#EA3C53"}}/>*/}
                            {/*    Контакт*/}
                            {/*</span>*/}
                            {/*        <span>*/}
                            {/*    <i style={{fontSize: '28px', margin: '5px 11px 0 0', color: "#EA3C53"}}*/}
                            {/*       className="fas fa-mobile-alt"></i>*/}
                            {/*    Контактный номер*/}
                            {/*</span>*/}
                            {/*        <span>*/}
                            {/*    <MDBIcon icon="envelope"*/}
                            {/*             style={{fontSize: '20px', marginRight: '9px', color: "#EA3C53"}}/>*/}
                            {/*    Почта*/}
                            {/*</span>*/}
                            {/*        <span>*/}
                            {/*    <i style={{fontSize: '20px', marginRight: '9px', color: "#EA3C53"}}*/}
                            {/*       className="fas fa-globe-americas"></i>*/}
                            {/*    Сайт*/}
                            {/*</span>*/}
                            {/*    </div>*/}
                                <div className="vac-details-card-descr">
                                    <p dangerouslySetInnerHTML={{__html: vacancyData.description}}></p>
                                </div>
                                <div className="vac-details-sendCV">
                                    <button className="vac-btn">Отправить резюме</button>
                                </div>
                            </div>
                        </div>
                        <div className="vac-details-company-container">
                            <div className="vac-details-icon-block">
                                <img src={companyIcon} alt="CompanyIcon" style={{marginTop: "25px"}}/>
                            </div>
                            <div className="vac-details-info">
                                <div><Link to={"#"}>{vacancyData.company}</Link></div>
                                <div><span>{vacancyData.category}</span></div>
                                <div><a href={`https://${vacancyData.site}`}> {vacancyData.site}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
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
