import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const SearchPageItem = ({user, idx}) => {
    const {profile} = user;
    return (
        <div className="sp-item-block">
            <FontAwesomeIcon style={{marginTop: "7px"}} className="user-icon" icon={faUser} size="10x"/>
            <div className="item-col">
                <a href="#">{user.name} {user.lastName}</a>
                <p href="#">Team Lead</p>
            </div>
            <div className="flex-placeholder"></div>
            <a href="#" className="sp-companyName">{profile.companyName}</a>
            <div className="flex-placeholder"></div>
            <div className="sp-points">
                <FontAwesomeIcon style={{color: "#48478a", marginRight: "5px"}} icon={faStar}/>
                <span className="bold">9.2</span>
            </div>
        </div>
    );
};

export default SearchPageItem;