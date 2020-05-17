import { assetsConstants } from '../CONSTANTS';
import { assetsService } from '../Services';

export const assetsActions = {
    getAllVacancies,
    getAllNews
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