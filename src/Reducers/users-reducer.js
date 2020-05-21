import { userConstants } from '../CONSTANTS';

const initialState = {
    userData: {},
    profileData: [],
    profilesList: [],
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
                profilesList: [],
                loading: true,
                error: null
            };
        case userConstants.GETALL_USERS_SUCCESS:
            return {
                ...state,
                profilesList: action.profilesList,
                loading: false,
                error: null
            };
        case userConstants.GETALL_USERS_FAILURE:
            return {
                ...state,
                profilesList: [],
                loading: false,
                error: action.error
            };
        case userConstants.GETPROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.GETPROFILE_SUCCESS:
            return {
                ...state,
                profileData: action.profileData
            };
        case userConstants.GETPROFILE_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}