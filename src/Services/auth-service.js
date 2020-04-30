export default class AuthService {

    _userBase = "http://localhost:3000/api/user";

    registerUser = (values) => {
        fetch(`${this._userBase}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
            redirect: "follow"
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.log('error', error));
    };
}