import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const RatingBlocksItem = ({user}) => {
    const {profile} = user;
    console.log(profile);
    const isCompany = profile ? profile.companyName : 'Залупская залупа';
    return (
        <div className="aside-rating-item">
            <div className="aside-profile-picture">
                <FontAwesomeIcon className="user-icon" icon={faUser} size="4x"/>
            </div>
            <div className="col-box">
                <a href="/">{user.name} {user.lastName}</a>
                <a href="/">{isCompany}</a>
            </div>
            <div className="flex-placeholder"></div>
            <div className="aside-points">
                <span className="bold">9.2</span>
                <br/>
                <span className="small">/10</span>
            </div>
        </div>
    );
};

export default RatingBlocksItem;