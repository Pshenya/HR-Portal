import { userConstants } from '../CONSTANTS';

const initialState = {
    userData: {},
    profileData: [],
    myProfileData: [],
    profilesList: [],
    deleted: false,
    approveSended: false,
    loading: false,
    error: null
};
export function users(state = initialState, action) {
    switch (action.type) {
        case userConstants.GETUSER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case userConstants.GETUSER_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.userData,
            };
        case userConstants.GETUSER_FAILURE:
            return {
                ...state,
                loading: false,
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
        case userConstants.POST_PROFILE_REQUEST:
            return { isSending: true };
        case userConstants.POST_PROFILE_SUCCESS:
            return {};
        case userConstants.POST_PROFILE_FAILURE:
            return {};
        case userConstants.UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                approveSended: true
            };
        case userConstants.UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case userConstants.DELETE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.DELETE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                deleted: true
            };
        case userConstants.DELETE_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                deleted: false,
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
                loading: false,
                profileData: action.profileData
            };
        case userConstants.GETPROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case userConstants.GETMYPROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.GETMYPROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                myProfileData: action.myProfileData
            };
        case userConstants.GETMYTPROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}
