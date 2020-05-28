import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../Routes/routes";
import RoomIcon from "@material-ui/icons/Room";

const VacanciesPageItem = ({vacancy}) => {
    return (
        <Link to={`${ROUTES.VACANCY_DETAILS}/${vacancy._id}`} className="disable-link-styles">
            <article className="vac-card">
                <div className="vac-card-body">
                    <div className="card-main-content">
                        <div className="common-info">
                            <h3 className="vac-card-title">{vacancy.heading}</h3>
                            <p className="company-name">{vacancy.company}</p>
                            <span className="vac-card-salary">$ {vacancy.salary}</span>
                            <span className="vac-card-location">
                                                <RoomIcon style={{marginRight: '5px'}}/>
                                                Киев
                                            </span>
                        </div>
                    </div>
                    <div className="vac-card-description">
                        {vacancy.description}
                    </div>
                </div>
                <div className="vac-card-footer">
                    <div className="publication-time">
                        30 минут назаж
                    </div>
                </div>
            </article>
        </Link>
    )
};

export default VacanciesPageItem;