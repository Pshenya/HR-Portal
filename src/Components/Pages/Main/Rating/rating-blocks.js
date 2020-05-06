import React, { Component } from 'react';

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../Routes/routes";

import './rating-blocks.css';

import RatingBlocksItem from "./rating-blocks-item";
import Loading from "../../../Loading/loading";
import { userActions } from "../../../../Actions";
import ErrorIndicator from "../../../ErrorIndicator/error-indicator";


const RatingBlocks = ({usersList}) => {

    return (
        <aside className="aside">
            <div className="rating">
                <h3><Link to={ROUTES.RATINGS}>Топ HR</Link></h3>
                <ul className="rating-blocks">
                    {
                        usersList.map((user) => {
                            return (
                                <li key={user.id}>
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
    }

    render() {
        const {usersList, loading, error} = this.props;
        if (loading) {
            return (
                <div className="rating-loading">
                    <Loading/>
                </div>
            )
        }
        if (error) {
            return (
                <div className="rating-error">
                    <ErrorIndicator/>
                </div>
            )
        }
        return <RatingBlocks usersList={usersList}/>
    }
}

const mapStateToProps = ({users}) => {
    return {
        usersList: users.usersList,
        loading: users.loading,
        error: users.error
    }
};

const mapDispatchToProps = {
    getAllUsers: userActions.getAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingBlocksContainer);