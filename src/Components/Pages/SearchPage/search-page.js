import React, { Component } from 'react';
import { connect } from "react-redux";

import './search-page.css';

import SearchBlock from "./search-block";
import { userActions } from "../../../Actions";
import Loading from "../../Loading/loading";
import ErrorIndicator from "../../ErrorIndicator/error-indicator";
import SearchPageItem from "./search-page-item";

const SearchPage = ({profilesList}) => {
    return (
        <div className="sp">
            <SearchBlock/>

            {
                profilesList.map((user, idx) => {
                    return <div className="sp-item" key={user._id}>
                        <SearchPageItem user={user} idx={idx}/>
                    </div>
                })
            }
        </div>
    );
};

class SearchPageContainer extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        const {profilesList, loading, error} = this.props;
        if (loading)
            return (
                <div className="searchPage-loading">
                    <Loading/>
                </div>
            );
        if (error) return <ErrorIndicator/>;
        return <SearchPage profilesList={profilesList}/>
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