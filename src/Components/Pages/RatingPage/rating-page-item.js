import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../Routes/routes";
import {randomInteger} from "../../Helpers";

const RatingPageItem = ({userData, idx}) => {
    const {user} = userData;
    console.log(userData.jobPosition);
    return (
        <tr className="ratingPage-item-block">
            <td>
                {idx+1}
            </td>
            <td className="person-name">
                <Link to={`${ROUTES.PROFILE}/${userData.userId}`}>{user.name} {user.lastName}</Link>
                <div className="job">
                    {userData.jobPosition}
                </div>
            </td>
            <td></td>
            <td>{userData.companyName}</td>
            <td>
                <p style={{color: "green"}}>+{randomInteger(0, 10)}</p>
            </td>
            <td></td>
            <td><b>{Math.round((userData.rating)*10)/10}</b></td>
        </tr>
    );
};

export default RatingPageItem;
