import { userConstants } from '../CONSTANTS';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {loggedIn: false};

export function auth(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false
            };
        case userConstants.LOGOUT:
            return {
                ...state,
                loggedIn: false
            };
        default:
            return state
    }
}