export default class AuthService {

    constructor(domain) {
        this.domain = domain || 'http://localhost:3000';   
    }

    login = (email, password) => {
        // Get a token
        return this.fetch(`${this.domain}/token`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }).then(res => {
                this.setToken(res.id_token);
                return this.fetch(`${this.domain}/user`, {
                    method: 'GET'
                })
            }).then(res => {
                this.setProfile(res);
                return Promise.resolve(res);
            })
        })
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !isTokenExpired(token);
    }

    setProfile() {
        // Saves profile data to localStorage
        localStorage.setItem('profile', JSON.stringify(profile));
    }

    getProfile = () => {
        // get the profile data from localStorage
        const profile = localStorage.getItem('profile');
        return profile? JSON.parse(localStorage.profile) : {};
    }

    setToken(idToken) {
        // Save user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Get the user token from localstorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clearn user token + profile data from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }

    _checkStatus(response) {
        if (response.status >=200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = responsethrow error
        }
    }

    fetch = (url, options) => {
        const header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if(this.isLoggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
        .then(this._checkStatus)
        .then(response => response.json)
    }
}