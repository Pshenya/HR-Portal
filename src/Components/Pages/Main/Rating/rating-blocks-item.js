import React from "react";

import {Link} from "react-router-dom";
import { ROUTES } from "../../../../Routes/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const RatingBlocksItem = ({userData}) => {
    const {user} = userData;
    const isCompany = userData ? userData.companyName : 'Залупская залупа';
    const isRating = userData ? userData.rating : 'N/A';
    return (
        <div className="aside-rating-item">
            <div className="aside-profile-picture">
                <FontAwesomeIcon className="user-icon" icon={faUser} size="4x"/>
            </div>
            <div className="col-box">
                <Link to={`${ROUTES.PROFILE}/${userData.userId}`}>{user.name} {user.lastName}</Link>
                <a href="/">{isCompany}</a>
            </div>
            <div className="flex-placeholder"></div>
            <div className="aside-points">
                <span className="bold">{isRating}</span>
                <br/>
                <span className="small">/10</span>
            </div>
        </div>
    );
};

export default RatingBlocksItem;