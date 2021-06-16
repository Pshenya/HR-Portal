import React from "react";

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {ROUTES} from "../../../Routes/routes";
import profileImg from "../../../assets/img/profile1.png";

const SearchPageItem = ({userData}) => {
    const {user} = userData;
    return (
        <div className="sp-item-block">
            <img src={profileImg} alt="profile"/>
            {/*<FontAwesomeIcon style={{marginTop: "7px"}} className="user-icon" icon={faUser} size="10x"/>*/}
            <div className="item-col">
                <Link to={`${ROUTES.PROFILE}/${userData.userId}`}>{user.name} {user.lastName}</Link>
                <span>{userData.jobPosition}</span>
            </div>
            <div className="flex-placeholder"></div>
            <span className="sp-companyName">{userData.companyName}</span>
            <div className="flex-placeholder"></div>
            <div className="sp-points">
                {userData.rating &&
                <FontAwesomeIcon style={{color: "#2bbbad", marginRight: "5px"}} icon={faStar}/>}
                {userData.rating && <span className="bold">{Math.round((userData.rating)*10)/10}</span>}

            </div>
        </div>
    );
};

export default SearchPageItem;
