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
    return (
        <aside className="aside">
            <div className="aside-rating">
                <h3><Link to={ROUTES.RATINGS}>Топ HR</Link></h3>
                <ul className="aside-rating-blocks">
                    {
                        profilesList
                            .filter(userData => {
                            return userData.jobPosition === 'HR' || userData.jobPosition === 'IT-Recruiter'
                                || userData.jobPosition === 'HR/IT-Recruiter';
                            })
                            .map((userData) => {
                            return (
                                <li key={userData.userId}>
                                    <RatingBlocksItem userData={userData}/>
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
    }

    render() {
        const {profilesList, loading, error} = this.props;
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
        return <RatingBlocks profilesList={profilesList}/>
    }
}

const mapStateToProps = ({users}) => {
    return {
        profilesList: users.profilesList,
        loading: users.loading,
        error: users.error
    }
};

const mapDispatchToProps = {
    getAllUsers: userActions.getAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingBlocksContainer);