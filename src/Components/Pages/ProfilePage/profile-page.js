import React, { Component } from "react";

import './profile-page.css';

import MyProfile from "./MyProfile/my-profile";
import UsersProfile from "./UsersProfile/users-profile";

class ProfilePage extends Component {
    render() {
        const {userData, feedbacksList, data, socials, userId, authorizedUserId} = this.props;
        if (userId && userId !== authorizedUserId) {
            return <UsersProfile userId={userId} userData={userData} feedbacksList={feedbacksList}/>
        }
        return <MyProfile userId={userId} userData={userData} feedbacksList={feedbacksList} data={data} socials={socials}/>

    }
}

export default ProfilePage;