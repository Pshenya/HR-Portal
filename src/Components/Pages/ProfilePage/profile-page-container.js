import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {renderSocials, Socials} from "./MyProfile/DynamicHelpers/socials";
import {assetsActions, userActions} from "../../../Actions";
import {connect} from "react-redux";
import ProfilePage from "./profile-page";
import {ROUTES} from "../../../Routes/routes";

class ProfilePageContainer extends Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = localStorage.getItem('userId');
            if (!userId) {
                this.props.history.push(ROUTES.LOGIN);
            }
        }

        this.props.getProfileData(userId);
        this.props.getFeedbacks(userId);
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
        if (!isShowComponent) {
            this.setState({[name]: name});
        } else {
            this.setState({[name]: ''})
        }
    };


    render() {
        const {profileData, feedbacksList} = this.props;
        const {addJob, Facebook, LinkedIn, Github, Telegram} = this.state;
        const data = {
            addJob,
            Facebook,
            LinkedIn,
            Github,
            Telegram
        };
        const socials = renderSocials(Socials, this.onSocialSelected);
        let authorizedUserId = localStorage.getItem('userId');
        let userId = this.props.match.params.userId;
        return (
            <div>
                {profileData.map(userData => {
                    return <div key={userData._id}>
                        <ProfilePage userData={userData} feedbacksList={feedbacksList}
                                     data={data} socials={socials}
                                     userId={userId} authorizedUserId={authorizedUserId}/>
                    </div>
                })}
            </div>
        )
    }
}


const mapStateToProps = ({auth, users, assets}) => {
    return {
        loggedIn: auth.loggedIn,
        profileData: users.profileData,
        feedbacksList: assets.feedbacksList
    }
};

const mapDispatchToProps = {
    getUser: userActions.getUserData,
    getProfileData: userActions.getProfileData,
    getFeedbacks: assetsActions.getFeedbacks
};

withRouter(ProfilePageContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);

