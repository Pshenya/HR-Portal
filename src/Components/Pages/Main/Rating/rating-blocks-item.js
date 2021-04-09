import React from "react";

import {Link} from "react-router-dom";
import {ROUTES} from "../../../../Routes/routes";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const RatingBlocksItem = ({userData}) => {
    const {user} = userData;
    return (
        <div className="aside-rating-item">
            <div className="aside-profile-picture">
                <FontAwesomeIcon className="user-icon" icon={faUser} size="4x"/>
            </div>
            <div className="col-box">
                <Link to={`${ROUTES.PROFILE}/${userData.userId}`}>{user.name} {user.lastName}</Link>
                <a href="/">{userData.companyName}</a>
            </div>
            <div className="flex-placeholder"></div>
            <div className="aside-points">
                <span className="bold">{Math.round((userData.rating)*10)/10}</span>
                <br/>
                <span className="small">/10</span>
            </div>
        </div>
    );
};

export default RatingBlocksItem;
