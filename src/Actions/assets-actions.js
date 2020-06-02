import {assetsConstants} from '../CONSTANTS';
import {assetsService} from '../Services';

export const assetsActions = {
    getAllVacancies,
    getVacancyById,
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

function sendFeedback(userId, from, text) {
    return dispatch => {
        dispatch(request());

        assetsService.sendFeedback(userId, from, text)
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