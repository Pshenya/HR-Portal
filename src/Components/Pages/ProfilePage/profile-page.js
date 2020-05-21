import React, { Component } from "react";

import './profile-page.css';

import SocialDynamic from "./MyProfile/DynamicHelpers/social-dynamic-form";
import JobDynamic from "./MyProfile/DynamicHelpers/job-dynamic-form";

import { Form, Row, Col } from "react-bootstrap";

import pavlik from '../../../assets/img/pavlik.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Avatar from "react-avatar-edit";
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
        const {profile, data, socials} = this.props;
        return (
            // <MyProfile profile={profile} data={data} socials={socials}/>
            <UsersProfile profile={profile}/>
        )
    }
}

export default ProfilePage;