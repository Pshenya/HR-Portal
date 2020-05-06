import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const RatingBlocksItem = ({user}) => {
    const {name, lastname, companyName, rating} = user;
    return (
        <div className="rating-item">
            <div className="profile-picture">
                <FontAwesomeIcon className="user-icon" icon={faUser} size="4x"/>
            </div>
            <div className="col-box">
                <a href="/">{name} {lastname}</a>
                <a href="/">{companyName}</a>
            </div>
            <div className="flex-placeholder"></div>
            <div className="points">
                <span className="bold">{rating}</span>
                <br/>
                <span className="small">/10</span>
            </div>
        </div>
    );
};

export default RatingBlocksItem;