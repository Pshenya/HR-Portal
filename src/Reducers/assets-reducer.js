import { assetsConstants } from "../CONSTANTS";

const initialState = {
    vacanciesList: [],
    newsList: [],
    feedbacksList: [],
    postData: {},
    vacancyData: {},
    vacancySended: false,
    respondSended: false,
    feedbackSended: false,
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
        case assetsConstants.GET_VACANCY_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case assetsConstants.GET_VACANCY_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                vacancyData: action.vacancyData
            };
        case assetsConstants.GET_VACANCY_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case assetsConstants.GET_VACANCY_FOR_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case assetsConstants.GET_VACANCY_FOR_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                vacanciesList: action.vacanciesList
            }
        case assetsConstants.GET_VACANCY_FOR_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case assetsConstants.POST_VACANCY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case assetsConstants.POST_VACANCY_SUCCESS:
            return {
                ...state,
                loading: false,
                vacancySended: true
            }
        case assetsConstants.POST_VACANCY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case assetsConstants.POST_VACANCY_RESPOND_REQUEST:
            return {
                ...state,
                loading: true
            }
        case assetsConstants.POST_VACANCY_RESPOND_SUCCESS:
            return {
                ...state,
                loading: false,
                respondSended: true
            }
        case assetsConstants.POST_VACANCY_RESPOND_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
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
        case assetsConstants.GET_NEWS_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case assetsConstants.GET_NEWS_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                postData: action.postData
            };
        case assetsConstants.GET_NEWS_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case assetsConstants.SEND_FEEDBACK_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case assetsConstants.SEND_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                feedbackSended: true
            };
        case assetsConstants.SEND_FEEDBACK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case assetsConstants.GET_FEEDBACKS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case assetsConstants.GET_FEEDBACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                feedbacksList: action.feedbacksList
            };
        case assetsConstants.GET_FEEDBACKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
