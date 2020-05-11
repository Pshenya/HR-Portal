import React from "react";

const RatingPageItem = ({user, idx}) => {
    const {profile} = user;
    return (
        <tr className="ratingPage-item-block">
            <td>
                {idx+1}
            </td>
            <td className="person-name">
                <a href="#">{user.name} {user.lastName}</a>
                <div className="job">
                    Team Lead
                </div>
            </td>
            <td></td>
            <td>{profile.companyName}</td>
            <td>
                <p style={{color: "green"}}>+800</p>
            </td>
            <td></td>
            <td><b>9.8</b></td>
        </tr>
    );
};

export default RatingPageItem;