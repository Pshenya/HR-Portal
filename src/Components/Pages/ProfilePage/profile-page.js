import React, { Component } from "react";

import './profile-page.css';

import MyProfile from "./MyProfile/my-profile";
import UsersProfile from "./UsersProfile/users-profile";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                companyName: '',
                workExperience: '',
                salary: '',
                phone: '',
                facebookLink: '',
                linkedinLink: '',
                githubLink: '',
                telegramLink: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {profile} = this.state;
        this.setState({
            profile: {
                ...profile,
                [name]: value
            }
        });
    }


    render() {
        const {profile, data, socials, userId, authorizedUserId} = this.props;
        if (userId === authorizedUserId) {
            return <MyProfile profile={profile} data={data} socials={socials}/>
        }
        if (userId) {
            return <UsersProfile profile={profile}/>
        }
        return <MyProfile profile={profile} data={data} socials={socials}/>

    }
}

export default ProfilePage;