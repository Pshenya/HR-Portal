import {authHeader} from '../Components/Helpers';
import {history} from '../Components/Helpers';

export const userService = {
	register,
	login,
	logout,
	getUserData,
	getAllUsers,
	postProfileData,
	getProfileData,
	getMyProfileData,
	updateProfileData,
	deleteProfileData,
};

const _apiURL = 'https://hr-portal-backend.herokuapp.com/api';

function register(user) {
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(user),
		redirect: 'follow',
	};

	return fetch(`${_apiURL}/user/register`, requestOptions)
		.then(handleResponse)
		.then((user) => {
			console.log(JSON.parse(user));
			console.log(localStorage.getItem('usertId'));
			localStorage.setItem('userId', JSON.parse(user));
			return user;
		});
}

function login(email, password) {
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({email, password}),
	};

	return fetch(`${_apiURL}/user/login`, requestOptions)
		.then(handleResponse)
		.then((user) => {
			// store user details and jwt token in local storage to keep user logged in between page refreshes
			localStorage.setItem('user', user);
			return user;
		});
}

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem('user');
	localStorage.removeItem('userId');
}

function getUserData() {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
		redirect: 'follow',
	};
	return fetch(`${_apiURL}/posts`, requestOptions)
		.then(handleResponse)
		.then((userData) => {
			const user = JSON.parse(userData);
			localStorage.setItem('userId', user.userId);
			return JSON.parse(userData);
		});
}

function postProfileData(profile) {
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(profile),
	};

	return fetch(`${_apiURL}/user/profile`, requestOptions)
		.then(handleResponse)
		.then((profile) => {
			return profile;
		});
}

function updateProfileData(profile, userId) {
	const requestOptions = {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(profile),
	};
	return fetch(`${_apiURL}/user/profile/${userId}`, requestOptions)
		.then(handleResponse)
		.then((profile) => {
			return profile;
		});
}

function deleteProfileData(userId) {
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
	};
	return fetch(`${_apiURL}/user/profile/delete/${userId}`, requestOptions).then((response) =>
		response.text().then((data) => {
			if (response.ok) {
				// auto logout if 400 response returned from api
				history.push('/');
				logout();
				window.location.reload();
			}
			const error = data.toString();

			return Promise.reject(error);
		})
	);
}

function getProfileData(userId) {
	const requestOptions = {
		method: 'GET',
		redirect: 'follow',
	};
	return fetch(`${_apiURL}/user/profile?userId=${userId}`, requestOptions)
		.then(handleResponse)
		.then((profileData) => {
			return JSON.parse(profileData);
		});
}

function getMyProfileData(userId) {
	const requestOptions = {
		method: 'GET',
		redirect: 'follow',
	};
	return fetch(`${_apiURL}/user/profile?userId=${userId}`, requestOptions)
		.then(handleResponse)
		.then((myProfileData) => {
			return JSON.parse(myProfileData);
		});
}

function getAllUsers() {
	const requsetOptions = {
		method: 'GET',
		redirect: 'follow',
	};
	return fetch(`${_apiURL}/user/profile/all`, requsetOptions)
		.then(handleResponse)
		.then((userData) => {
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
	return response.text().then((data) => {
		if (!response.ok) {
			if (data === 'Invalid token') {
				// auto logout if 400 response returned from api
				logout();
				window.location.reload();
			}
			const error = data.toString();

			return Promise.reject(error);
		}
		return data;
	});
}
