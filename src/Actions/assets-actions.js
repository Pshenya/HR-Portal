import { assetsConstants, userConstants } from '../CONSTANTS';
import { assetsService, userService } from '../Services';

export const assetsActions = {
    getAllVacancies,
    getAllNews,
    getNewsById
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

function getAllNews() {
    return dispatch => {
        dispatch(request());

        assetsService.getAllNews()
            .then(newsList => dispatch(success(newsList)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: assetsConstants.GETALL_NEWS_REQUEST} }

    function success(newsList) { return {type: assetsConstants.GETALL_NEWS_SUCCESS, newsList} }

    function failure(error) { return {type: assetsConstants.GETALL_NEWS_FAILURE, error} }

}

function getNewsById(id) {
    return dispatch => {
        dispatch(request());

        assetsService.getNewsById(id)
            .then(postData => dispatch(success(postData)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: assetsConstants.GET_NEWS_BY_ID_REQUEST} }
    function success(postData) { return { type: assetsConstants.GET_NEWS_BY_ID_SUCCESS, postData } }
    function failure(error) { return { type: assetsConstants.GET_NEWS_BY_ID_FAILURE, error } }
}