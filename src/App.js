import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

import {connect} from "react-redux";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import {ROUTES} from './Routes/routes';
import {history} from './Components/Helpers';
import {alertActions, userActions} from './Actions';

import Header from "./Components/Header/header";
import MainPage from "./Components/Pages/Main/main-page";
import Footer from "./Components/Footer/footer";

import {
    AboutPage, SearchPage, ProfilePageContainer, RatingPage,
    VacanciesPage, StatsPage, SignInPage, RegistrationPage,
    NewsPageContainer, VacancyDetailsContainer
} from './Components/Pages';
import ProfileHelper from "./Components/Pages/Login/RegisterProfile/profile-helper";

export class App extends Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const {alert} = this.props;

        // Скривання хедеру та футеру на сторінках регістрації та логіну
        const shouldShowHeaderAndFooter = history.location.pathname !== ROUTES.LOGIN
            && history.location.pathname !== ROUTES.REGISTRATION && history.location.pathname !== ROUTES.PROFILE_REGISTER;

        return (
            <div className="app">
                <Router history={history}>
                    {shouldShowHeaderAndFooter && <Header/>}
                    {
                        alert.message &&
                        <div style={{marginBottom: 0}} className={`alert ${alert.type}`}>
                            {alert.message}
                        </div>
                    }
                    { /*Роутинг сайту (сторінки і навігація по ним)*/}
                    <Switch>
                        <Route exact path={ROUTES.MAIN} component={MainPage}/>
                        <Route path={ROUTES.SEARCH} component={SearchPage}/>
                        <Route path={ROUTES.RATINGS} component={RatingPage}/>
                        <Route path={ROUTES.VACANCIES} component={VacanciesPage}/>
                        <Route path={`${ROUTES.VACANCY_DETAILS}/:vacancyID`} component={VacancyDetailsContainer}/>
                        <Route path={`${ROUTES.NEWS}/:post`} component={NewsPageContainer}/>
                        <Route path={ROUTES.STATS} component={StatsPage}/>
                        <Route path={ROUTES.ABOUT} component={AboutPage}/>
                        <Route path={ROUTES.LOGIN} component={SignInPage}/>
                        <Route path={`${ROUTES.PROFILE}/:userId?`} component={ProfilePageContainer}/>
                        <Route path={ROUTES.REGISTRATION} component={RegistrationPage}/>
                        <Route path={ROUTES.PROFILE_REGISTER} component={ProfileHelper}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                    {shouldShowHeaderAndFooter && <Footer/>}
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
};

const mapDispatchToProps = {
    clearAlerts: alertActions.clear,
    logout: userActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
