import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {assetsActions, userActions} from "../../../Actions";
import {connect} from "react-redux";
import {ROUTES} from "../../../Routes/routes";
import ResumesPage from "./resumes-page";
import Loading from "../../Loading/loading";

class ResumesPageContainer extends Component {
    refreshVacancies() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = localStorage.getItem('userId');
            if (!userId) {
                this.props.history.push(ROUTES.LOGIN);
            }
        }

        this.props.getVacancyForUser(userId);
    }

    componentDidMount() {
        this.refreshVacancies();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshVacancies();
        }
    }


    render() {
        const {vacanciesList, loading} = this.props;
        let authorizedUserId = localStorage.getItem('userId');
        let userId = this.props.match.params.userId;
        console.log(vacanciesList)
        if (loading){
            return (
                <div className="searchPage-loading">
                    <Loading/>
                </div>
            )
        } else {
            return (
                <div className="resumes-container">
                    {vacanciesList.map(vacancyData => {
                        return <div key={vacancyData._id}>
                            <ResumesPage vacancyData={vacancyData}/>
                        </div>
                    })}
                </div>
            )
        }
    }
}


const mapStateToProps = ({assets}) => {
    return {
        loading: assets.loading,
        vacanciesList: assets.vacanciesList,
    }
};

const mapDispatchToProps = {
    getVacancyForUser: assetsActions.getVacancyForUser,
};

withRouter(ResumesPageContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ResumesPageContainer);

