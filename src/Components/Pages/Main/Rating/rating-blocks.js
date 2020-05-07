import React, { Component } from 'react';

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../Routes/routes";

import './rating-blocks.css';

import RatingBlocksItem from "./rating-blocks-item";
import Loading from "../../../Loading/loading";
import { userActions } from "../../../../Actions";
import ErrorIndicator from "../../../ErrorIndicator/error-indicator";


const RatingBlocks = ({profilesList}) => {
    console.log(profilesList);
    return (
        <aside className="aside">
            <div className="aside-rating">
                <h3><Link to={ROUTES.RATINGS}>Топ HR</Link></h3>
                <ul className="aside-rating-blocks">
                    {
                        profilesList.map((user) => {
                            return (
                                <li key={user._id}>
                                    <RatingBlocksItem user={user}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
    );
};

class RatingBlocksContainer extends Component {
    componentDidMount() {
        this.props.getAllUsers();
        this.props.getAllProfiles();
    }

    render() {
        const {profilesList, usersList, loading, error} = this.props;
        if (loading) {
            return (
                <div className="aside-rating-loading">
                    <Loading/>
                </div>
            )
        }
        if (error) {
            return (
                <div className="aside-rating-error">
                    <ErrorIndicator/>
                </div>
            )
        }
        return <RatingBlocks usersList={usersList} profilesList={profilesList}/>
    }
}

const mapStateToProps = ({users}) => {
    return {
        userData: users.userData,
        usersList: users.usersList,
        profilesList: users.profilesList,
        loading: users.loading,
        error: users.error
    }
};

const mapDispatchToProps = {
    getUser: userActions.getUserData,
    getAllUsers: userActions.getAllUsers,
    getAllProfiles: userActions.getAllProfiles
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingBlocksContainer);