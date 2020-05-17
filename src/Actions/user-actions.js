import { userConstants } from '../CONSTANTS';
import { userService } from '../Services';
import { alertActions } from './';
import { history } from '../Components/HOC';

export const userActions = {
    login,
    logout,
    register,
    getUserData,
    getAllUsers,
    getProfileData
    // delete: _delete
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getUserData() {
    return dispatch => {
        dispatch(request());

        userService.getUserData()
            .then(
                userData => dispatch(success(userData)),
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: userConstants.GETUSER_REQUEST } }
    function success(userData) { return { type: userConstants.GETUSER_SUCCESS, userData } }
    function failure(error) { return { type: userConstants.GETUSER_FAILURE, error } }
}

function getAllUsers() {
    return dispatch => {
        dispatch(request());

        userService.getAllUsers()
            .then(profilesList => dispatch(success(profilesList)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: userConstants.GETALL_USERS_REQUEST} }
    function success(profilesList) { return { type: userConstants.GETALL_USERS_SUCCESS, profilesList } }
    function failure(error) { return { type: userConstants.GETALL_USERS_FAILURE, error } }
}

function getProfileData() {
    return dispatch => {
        dispatch(request());

        userService.getProfileData()
            .then(profileData => dispatch(success(profileData)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: userConstants.GETPROFILE_REQUEST} }
    function success(profileData) { return { type: userConstants.GETPROFILE_SUCCESS, profileData } }
    function failure(error) { return { type: userConstants.GETPROFILE_FAILURE, error } }
}
//
// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));
//
//         userService.delete(id)
//             .then(
//                 user => dispatch(success(id)),
//                 error => dispatch(failure(id, error.toString()))
//             );
//     };
//
//     function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
//     function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
//     function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
// }