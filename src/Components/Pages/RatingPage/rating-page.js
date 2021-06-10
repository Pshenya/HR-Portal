import React, { Component } from 'react';

import './rating-page.css';

import { connect } from "react-redux";
import { userActions } from "../../../Actions";
import RatingPageItem from "./rating-page-item";
import Loading from "../../Loading/loading";
import ErrorIndicator from "../../ErrorIndicator/error-indicator";

const RatingPage = ({profilesList}) => {
    return (
        <div className="rating-container">
            <div className="content-container">
                <h1 className="rating-title">ТОП-50 HR-ов Украины</h1>
                <table className="rating-table" id="ratingTableId">

                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Имя и фамилия</th>
                        <th></th>
                        <th>Компания</th>
                        <th>Δ
                            <div className="period">May&#39;20 / Jun&#39;20</div>
                        </th>
                        <th></th>
                        <th>Средняя оценка<br/>пользователей</th>
                    </tr>
                    </thead>
                    {
                        profilesList.filter(userData => {
                            return userData.user.role === 'HR';
                        })
                            .map((userData, idx) => {
                            return <tbody key={userData.userId}>
                                <RatingPageItem userData={userData} idx={idx}/>
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
        const {profilesList, loading, error} = this.props;

        if (loading)
            return (
                <div className="page-loading">
                    <Loading/>
                </div>
            );
        else if (error) return <ErrorIndicator/>;
        else{
            return <RatingPage profilesList={profilesList}/>
        }
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
export default connect(mapStateToProps, mapDispatchToProps)(RatingPageContainer);
