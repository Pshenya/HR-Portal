import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const SearchPageItem = ({userData, idx}) => {
    const {user} = userData;
    const isCompany = userData ? userData.companyName : 'Залупская залупа';
    const isRating = userData ? userData.rating : 'N/A';
    return (
        <div className="sp-item-block">
            <FontAwesomeIcon style={{marginTop: "7px"}} className="user-icon" icon={faUser} size="10x"/>
            <div className="item-col">
                <a href="#">{user.name} {user.lastName}</a>
                <p href="#">Team Lead</p>
            </div>
            <div className="flex-placeholder"></div>
            <a href="#" className="sp-companyName">{isCompany}</a>
            <div className="flex-placeholder"></div>
            <div className="sp-points">
                <FontAwesomeIcon style={{color: "#48478a", marginRight: "5px"}} icon={faStar}/>
                <span className="bold">{isRating}</span>
            </div>
        </div>
    );
};

export default SearchPageItem;