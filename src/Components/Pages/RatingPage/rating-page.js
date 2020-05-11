import React, { Component } from 'react';

import './rating-page.css';

import { connect } from "react-redux";
import { userActions } from "../../../Actions";
import RatingPageItem from "./rating-page-item";
import Loading from "../../Loading/loading";
import ErrorIndicator from "../../ErrorIndicator/error-indicator";

const RatingPage = ({usersList}) => {
    return (
        <div className="rating-container">
            <div className="rating-content">
                <h1 className="rating-title">ТОП-50 HR-ов Украины</h1>
                <table className="rating-table" id="ratingTableId">

                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Имя и фамилия</th>
                        <th></th>
                        <th>Компания</th>
                        <th>Δ
                            <div className="period">Jul&#39;19 / Jan&#39;20</div>
                        </th>
                        <th></th>
                        <th>Средняя оценка<br/>пользователей</th>
                    </tr>
                    </thead>
                    {
                        usersList.map((user, idx) => {
                            return <tbody key={user._id}>
                                <RatingPageItem user={user} idx={idx}/>
                            </tbody>
                        })
                    }
                </table>
            </div>
        </div>
    );
};

class RatingPageContainer extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        const {usersList, loading, error} = this.props;

        if (loading)
            return (
                <div className="ratingPage-loading">
                    <Loading/>
                </div>
            );
        if (error) return <ErrorIndicator/>
        return <RatingPage usersList={usersList}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(RatingPageContainer);