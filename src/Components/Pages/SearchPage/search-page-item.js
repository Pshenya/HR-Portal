import React from "react";

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {ROUTES} from "../../../Routes/routes";

const SearchPageItem = ({userData}) => {
    const {user} = userData;
    return (
        <div className="sp-item-block">
            <FontAwesomeIcon style={{marginTop: "7px"}} className="user-icon" icon={faUser} size="10x"/>
            <div className="item-col">
                <Link to={`${ROUTES.PROFILE}/${userData.userId}`}>{user.name} {user.lastName}</Link>
                <span>{userData.jobPosition}</span>
            </div>
            <div className="flex-placeholder"></div>
            <span className="sp-companyName">{userData.companyName}</span>
            <div className="flex-placeholder"></div>
            <div className="sp-points">
                <FontAwesomeIcon style={{color: "#48478a", marginRight: "5px"}} icon={faStar}/>
                <span className="bold">{userData.rating}</span>
            </div>
        </div>
    );
};

export default SearchPageItem;