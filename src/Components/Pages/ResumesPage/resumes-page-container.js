import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {assetsActions, userActions} from "../../../Actions";
import {connect} from "react-redux";
import {ROUTES} from "../../../Routes/routes";

class ResumesPageContainer extends Component {
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


    render() {
        const {profileData, feedbacksList} = this.props;
        let authorizedUserId = localStorage.getItem('userId');
        let userId = this.props.match.params.userId;
        return (
            <div>
                {/*{profileData.map(userData => {*/}
                {/*    return <div key={userData._id}>*/}
                {/*        <ProfilePage userData={userData} feedbacksList={feedbacksList}*/}
                {/*                     data={data} socials={socials}*/}
                {/*                     userId={userId} authorizedUserId={authorizedUserId}/>*/}
                {/*    </div>*/}
                {/*})}*/}
            </div>
        )
    }
}


const mapStateToProps = ({auth, users, assets}) => {
    return {
        loggedIn: auth.loggedIn,
        profileData: users.profileData,
    }
};

const mapDispatchToProps = {
    getUser: userActions.getUserData,
    getProfileData: userActions.getProfileData,
};

withRouter(ResumesPageContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ResumesPageContainer);

