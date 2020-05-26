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
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        if (user.name && user.lastName && user.email && user.password) {
            this.props.register(user);
        }
    }


    render() {
        const {userData, feedbacksList, data, socials, userId, authorizedUserId} = this.props;
        if (userId && userId !== authorizedUserId) {
            return <UsersProfile userId={userId} userData={userData} feedbacksList={feedbacksList}/>
        }
        return <MyProfile userId={userId} userData={userData} feedbacksList={feedbacksList} data={data} socials={socials}/>

    }
}

export default ProfilePage;