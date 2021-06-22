import React, { Component } from 'react';

import { connect } from "react-redux";

import './vacancies-page.css';

import { assetsActions } from "../../../Actions";

import Loading from "../../Loading/loading";
import ErrorIndicator from "../../ErrorIndicator/error-indicator";
import VacanciesPage from "./vacancies-page";

class VacanciesPageContainer extends Component {

    componentDidMount() {
        this.props.getAllVacancies();
    }

    render() {
        const {vacanciesList, loading, error} = this.props;
        if (loading) {
            return (
                <div className="page-loading">
                    <Loading/>
                </div>
            );
        }
        else if(error) return <ErrorIndicator/>
        else {
            return <VacanciesPage vacanciesList={vacanciesList} loading={loading}/>
        }
    }
}


const mapStateToProps = ({assets}) => {
    return {
        vacanciesList: assets.vacanciesList,
        loading: assets.loading,
        error: assets.error
    }
};

const mapDispatchToProps = {
    getAllVacancies: assetsActions.getAllVacancies
};


export default connect(mapStateToProps, mapDispatchToProps)(VacanciesPageContainer);
