import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { renderSocials, Socials } from "./MyProfile/DynamicHelpers/socials";
import { userActions } from "../../../Actions";
import { connect } from "react-redux";
import ProfilePage from "./profile-page";
import { ROUTES } from "../../../Routes/routes";

class ProfilePageContainer extends Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if ( !userId) {
            userId = localStorage.getItem('userId');
            if ( !userId) {
                this.props.history.push(ROUTES.LOGIN);
            }
        }

        if ( !userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getProfileData(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
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
        const {profileData} = this.props;
        const {addJob, Facebook, LinkedIn, Github, Telegram} = this.state;
        const data = {
            addJob,
            Facebook,
            LinkedIn,
            Github,
            Telegram
        };
        const socials = renderSocials(Socials, this.onSocialSelected);

        return (
            <div>
                {profileData.map(profile => {
                    return <ProfilePage profile={profile} data={data} socials={socials} onAddJob={this.onAddJob}
                                        onDeleteJob={this.onDeleteJob}/>
                })}
            </div>
        )


    }
}


const mapStateToProps = ({auth, users}) => {
    return {
        loggedIn: auth.loggedIn,
        profileData: users.profileData
    }
};

const mapDispatchToProps = {
    getProfileData: userActions.getProfileData
};

withRouter(ProfilePageContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);

