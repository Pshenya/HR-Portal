import { authHeader } from '../Components/Helpers';

export const userService = {
    register,
    login,
    logout,
    getUserData,
    getAllUsers,
    getProfileData
    // getById,
    // update,
    // delete: _delete
};

const _apiURL = "http://localhost:3000/api";

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
        redirect: "follow"
    };

    return fetch(`${_apiURL}/user/register`, requestOptions).then(handleResponse);
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    return fetch(`${_apiURL}/user/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', user);
            return user;

        });
}



function getUserData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/posts`, requestOptions)
        .then(handleResponse)
        .then(userData => {
            const user = JSON.parse(userData);
            localStorage.setItem('userId', user.userId);
            return JSON.parse(userData);
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
}

function saveProfileData() {

}
function getProfileData(userId){
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/user/profile?userId=${userId}`, requestOptions)
        .then(handleResponse)
        .then(profileData => {
            return JSON.parse(profileData);
        })
}


function getAllUsers() {
    const requsetOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/user/profile/all`, requsetOptions)
        .then(handleResponse)
        .then(userData => {
            console.log(JSON.parse(userData));
            return JSON.parse(userData);
        });
}

// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };
//
//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }


// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: {...authHeader(), 'Content-Type': 'application/json'},
//         body: JSON.stringify(user)
//     };
//
//     return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
//     ;
// }

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };
//
//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    return response.text()
        .then(data => {
            if ( !response.ok) {
                if (data === 'Invalid token') {
                    // auto logout if 400 response returned from api
                    logout();
                    window.location.reload();
                }
                const error = data.toString();

                return Promise.reject(error);
            }
            return data;

        })
}