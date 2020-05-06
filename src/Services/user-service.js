import { authHeader } from '../Components/HOC';

export const userService = {
    register,
    login,
    logout,
    getUserData,
    getAllUsers
    // getById,
    // update,
    // delete: _delete
};

const _apiURL = "http://localhost:3000/api";

const data = [
    {
        id: 1,
        name: 'Pavlik',
        lastname: 'Pshenya',
        companyName: 'Google',
        rating: 9.2
    },
    {
        id: 2,
        name: 'Miho',
        lastname: 'Kater',
        companyName: 'Amazon',
        rating: 8.8
    },
    {
        id: 3,
        name: 'Leha',
        lastname: 'Kol',
        companyName: 'Netflix',
        rating: 9.5
    },
    {
        id: 4,
        name: 'Jeff',
        lastname: 'Bezos',
        companyName: 'Amazon',
        rating: 10
    },
    {
        id: 5,
        name: 'Elon',
        lastname: 'Mask',
        companyName: 'Tesla',
        rating: 9.7
    },
    {
        id: 6,
        name: 'Mark',
        lastname: 'Zuckerberg',
        companyName: 'Facebook',
        rating: 9.1
    },
    {
        id: 7,
        name: 'Leha',
        lastname: 'Bichkoff',
        companyName: 'FIT',
        rating: 100
    }
];

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

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
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
            console.log(JSON.parse(userData));
            return JSON.parse(userData);
        })
}

function getAllUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.75) {
                reject(new Error('ERROR'))
            } else {
                resolve(data);
            }
        }, 700);
    })
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