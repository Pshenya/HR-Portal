export default class AuthService{

    _userBase = "http://localhost:3000/api/user";

    getLoginData = async (url) => {
        const res = await fetch(`${this._userBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }
}