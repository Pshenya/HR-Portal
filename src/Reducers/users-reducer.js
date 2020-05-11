import { userConstants } from '../CONSTANTS';

const initialState = {
    userData: {},
    usersList: [],
    loading: false,
    error: null
};
export function users(state = initialState, action) {
    switch (action.type) {
        case userConstants.GETUSER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.GETUSER_SUCCESS:
            return {
                ...state,
                userData: action.userData
            };
        case userConstants.GETUSER_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case userConstants.GETALL_USERS_REQUEST:
            return{
                ...state,
                usersList: [],
                loading: true,
                error: null
            };
        case userConstants.GETALL_USERS_SUCCESS:
            return {
                ...state,
                usersList: action.usersList,
                loading: false,
                error: null
            };
        case userConstants.GETALL_USERS_FAILURE:
            return {
                ...state,
                usersList: [],
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}