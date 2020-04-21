import React from "react";

import {Redirect} from "react-router-dom";

const ProfilePage = ({isLoggedIn}) => {
    if (isLoggedIn){
        return (
            <div>
                <h1>Profile Page</h1>
            </div>
        )
    }

    return <Redirect to="/signin"/>;
};

export default ProfilePage;