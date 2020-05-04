import React, { Component } from "react";
import { renderSocials, Socials } from "./DynamicHelpers/socials";
import { userActions } from "../../../Actions";
import { connect } from "react-redux";
import ProfilePage from "./profile-page";

class ProfilePageContainer extends Component {
    componentDidMount() {
        this.props.getUserData();
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


    onAddJob = () => {
        this.setState({
            addJob: true
        })
    };

    onDeleteJob = () => {
        this.setState({
            addJob: false
        })
    };

    render() {
        const {loggedIn, userData} = this.props;
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
                <ProfilePage userData={userData} data={data} socials={socials} onAddJob={this.onAddJob}
                             onDeleteJob={this.onDeleteJob}/>
            )
        }


    }
}


const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth,
        userData: state.getUser.userData
    }
};

const mapDispatchToProps = {
    getUserData: userActions.getUserData
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);

