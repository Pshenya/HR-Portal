import React from "react";

import './resumes-page.css';

import VacanciesPageItem from "../VacanciesPage/vacancies-page-item";
import NoSearchResults from "../../NoSearchResults/nosearchresults";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import {formatDate} from "../../Helpers";

const ResumesPage = ({vacancyData}) => {
    return (
        <div className="vac-main">
            <div className="vac-main-wrapper">
                <section className="vac-leftContent">
                    <article className="vac-card">
                        <div className="vac-card-body">
                            <div className="card-main-content">
                                <div className="common-info">
                                    <h3 className="vac-card-title">{vacancyData.heading}</h3>
                                    <p className="company-name">{vacancyData.company}</p>
                                    <span className="vac-card-salary">$ {vacancyData.salary}</span>
                                    <span className="vac-card-location">
                                                <RoomOutlinedIcon style={{marginRight: '5px', color:'#EA3C53'}}/>
                                        {vacancyData.region}
                                            </span>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: vacancyData.description}} className="vac-card-description">
                            </div>
                        </div>
                        <div className="vac-card-footer">
                            <div className="publication-time">
                                {formatDate(vacancyData.date)}
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default ResumesPage;
