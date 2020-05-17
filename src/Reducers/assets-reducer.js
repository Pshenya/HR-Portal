import { assetsConstants, userConstants } from "../CONSTANTS";

const initialState = {
    vacanciesList: [],
    newsList: [],
    loading: false,
    error: null
};

export function assets(state = initialState, action) {
    switch (action.type) {
        case assetsConstants.GETALL_VACANCY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case assetsConstants.GETALL_VACANCY_SUCCESS:
            return {
                ...state,
                loading: false,
                vacanciesList: action.vacanciesList
            };
        case assetsConstants.GETALL_VACANCY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case assetsConstants.GETALL_NEWS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case assetsConstants.GETALL_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                newsList: action.newsList
            };
        case assetsConstants.GETALL_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}