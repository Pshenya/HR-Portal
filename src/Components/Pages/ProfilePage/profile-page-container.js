import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import { renderSocials, Socials } from "./DynamicHelpers/socials";
import { userActions } from "../../../Actions";
import { connect } from "react-redux";
import ProfilePage from "./profile-page";
import { ROUTES } from "../../../Routes/routes";

class ProfilePageContainer extends Component {
    componentDidMount() {
        this.props.getUserData();
        this.props.getProfileData();
    }

    state = {
        addJob: false
    };

    onSocialSelected = (name) => {
        const isShowComponent = this.state[name];
        if ( !isShowComponent) {
            this.setState({[name]: name});
        } else {
            this.setState({[name]: ''})
        }
    };


    render() {
        const {loggedIn, userData, profileData} = this.props;
        const {addJob, Facebook, LinkedIn, Github, Google} = this.state;
        const data = {
            addJob,
            Facebook,
            LinkedIn,
            Github,
            Google
        };
        const socials = renderSocials(Socials, this.onSocialSelected);

        if (loggedIn) {
            return (
                <ProfilePage userData={userData} profileData={profileData} data={data} socials={socials} onAddJob={this.onAddJob}
                             onDeleteJob={this.onDeleteJob}/>
            )
        }
        return <Redirect to={ROUTES.MAIN}/>

    }
}


const mapStateToProps = ({auth, users}) => {
    return {
        loggedIn: auth.loggedIn,
        userData: users.userData,
        profileData: users.profileData
    }
};

const mapDispatchToProps = {
    getUserData: userActions.getUserData,
    getProfileData: userActions.getProfileData
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);

