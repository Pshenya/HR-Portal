import React, { Component } from 'react';
import { connect } from "react-redux";

import './search-page.css';

import { userActions } from "../../../Actions";
import Loading from "../../Loading/loading";
import ErrorIndicator from "../../ErrorIndicator/error-indicator";
import SearchPage from "./search-page";




class SearchPageContainer extends Component {
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
            return <SearchPage profilesList={profilesList}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer);
