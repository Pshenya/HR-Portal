import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const RatingBlocksItem = ({user, res}) => {
    const {companyName} = user;
    const {name} = res;
    return (
        <div className="aside-rating-item">
            <div className="aside-profile-picture">
                <FontAwesomeIcon className="user-icon" icon={faUser} size="4x"/>
            </div>
            <div className="col-box">
                <a href="/">{name}</a>
                <a href="/">{companyName}</a>
            </div>
            <div className="flex-placeholder"></div>
            <div className="aside-points">
                <span className="bold"></span>
                <br/>
                <span className="small">/10</span>
            </div>
        </div>
    );
};

export default RatingBlocksItem;