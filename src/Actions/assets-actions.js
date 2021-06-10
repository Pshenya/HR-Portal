import {assetsConstants, userConstants} from '../CONSTANTS';
import {assetsService, userService} from '../Services';
import {history} from "../Components/Helpers";

export const assetsActions = {
    getAllVacancies,
    getVacancyById,
    getVacancyForUser,
    postVacancy,
    postVacancyRespond,
    getAllNews,
    getNewsById,
    sendFeedback,
    getFeedbacks
};

function getAllVacancies() {
    return dispatch => {
        dispatch(request());

        assetsService.getAllVacancies()
            .then(vacanciesList => dispatch(success(vacanciesList)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: assetsConstants.GETALL_VACANCY_REQUEST} }
    function success(vacanciesList) { return {type: assetsConstants.GETALL_VACANCY_SUCCESS, vacanciesList} }
    function failure(error) { return {type: assetsConstants.GETALL_VACANCY_FAILURE, error} }

}

function getVacancyById(id){
    return dispatch => {
        dispatch(request());

        assetsService.getVacancyById(id)
            .then(vacancyData => dispatch(success(vacancyData)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: assetsConstants.GET_VACANCY_BY_ID_REQUEST} }
    function success(vacancyData) { return {type: assetsConstants.GET_VACANCY_BY_ID_SUCCESS, vacancyData} }
    function failure(error) { return {type: assetsConstants.GET_VACANCY_BY_ID_FAILURE, error} }
}

function getVacancyForUser(id){
    return dispatch => {
        dispatch(request());

        assetsService.getVacancyForUser(id)
            .then(vacanciesList => dispatch(success(vacanciesList)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: assetsConstants.GET_VACANCY_FOR_USER_REQUEST} }
    function success(vacanciesList) { return {type: assetsConstants.GET_VACANCY_FOR_USER_SUCCESS, vacanciesList} }
    function failure(error) { return {type: assetsConstants.GET_VACANCY_FOR_USER_FAILURE, error} }
}

function postVacancy(vacancy){
    return dispatch => {
        dispatch(request(vacancy));

        assetsService.postVacancy(vacancy)
            .then(
                vacancy => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(vacancy) { return { type: assetsConstants.POST_VACANCY_REQUEST, vacancy } }
    function success(vacancy) { return { type: assetsConstants.POST_VACANCY_SUCCESS, vacancy } }
    function failure(error) { return { type: assetsConstants.POST_VACANCY_FAILURE, error } }
}

function postVacancyRespond(respond){
    return dispatch => {
        dispatch(request(respond));

        assetsService.postVacancyRespond(respond)
            .then(
                respond => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(respond) { return { type: assetsConstants.POST_VACANCY_RESPOND_REQUEST, respond } }
    function success(respond) { return { type: assetsConstants.POST_VACANCY_RESPOND_SUCCESS, respond } }
    function failure(error) { return { type: assetsConstants.POST_VACANCY_RESPOND_FAILURE, error } }
}
function getAllNews() {
    return dispatch => {
        dispatch(request());

        assetsService.getAllNews()
            .then(newsList => dispatch(success(newsList)))
            .catch(error => dispatch(failure(error)))
    };

    function request() {
        return {type: assetsConstants.GETALL_NEWS_REQUEST}
    }

    function success(newsList) {
        return {type: assetsConstants.GETALL_NEWS_SUCCESS, newsList}
    }

    function failure(error) {
        return {type: assetsConstants.GETALL_NEWS_FAILURE, error}
    }

}

function getNewsById(id) {
    return dispatch => {
        dispatch(request());

        assetsService.getNewsById(id)
            .then(postData => dispatch(success(postData)))
            .catch(error => dispatch(failure(error)))
    };

    function request() {
        return {type: assetsConstants.GET_NEWS_BY_ID_REQUEST}
    }

    function success(postData) {
        return {type: assetsConstants.GET_NEWS_BY_ID_SUCCESS, postData}
    }

    function failure(error) {
        return {type: assetsConstants.GET_NEWS_BY_ID_FAILURE, error}
    }
}

function sendFeedback(userId, from, text, rate) {
    return dispatch => {
        dispatch(request());

        assetsService.sendFeedback(userId, from, text, rate)
            .then(
                res => {
                    dispatch(success());
                },
                error => {
                    console.log(error);
                    dispatch(failure(error))
                }
            );
    };

    function request() { return {type: assetsConstants.SEND_FEEDBACK_REQUEST} }
    function success() { return {type: assetsConstants.SEND_FEEDBACK_SUCCESS} }
    function failure(error) { return {type: assetsConstants.SEND_FEEDBACK_FAILURE, error} }
}

function getFeedbacks(id) {
    return dispatch => {
        dispatch(request());

        assetsService.getFeedbacks(id)
            .then(feedbacksList => dispatch(success(feedbacksList)))
            .catch(error => dispatch(failure(error)))
    };

    function request() {
        return {type: assetsConstants.GET_FEEDBACKS_REQUEST}
    }

    function success(feedbacksList) {
        return {type: assetsConstants.GET_FEEDBACKS_SUCCESS, feedbacksList}
    }

    function failure(error) {
        return {type: assetsConstants.GET_FEEDBACKS_FAILURE, error}
    }
}
