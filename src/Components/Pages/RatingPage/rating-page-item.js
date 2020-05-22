import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Routes/routes";

const RatingPageItem = ({user, idx}) => {
    const {profile} = user;
    const isCompany = profile ? profile.companyName : 'Залупская залупа';
    const isRating = profile ? profile.rating : 'N/A';
    return (
        <tr className="ratingPage-item-block">
            <td>
                {idx+1}
            </td>
            <td className="person-name">
                <Link to={`${ROUTES.PROFILE}/${user._id}`}>{user.name} {user.lastName}</Link>
                <div className="job">
                    Team Lead
                </div>
            </td>
            <td></td>
            <td>{isCompany}</td>
            <td>
                <p style={{color: "green"}}>+800</p>
            </td>
            <td></td>
            <td><b>{isRating}</b></td>
        </tr>
    );
};

export default RatingPageItem;