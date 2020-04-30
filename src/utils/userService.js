import tokenService from "./tokenService";
const BASE_URL = "/api/users/";

function signup(user) {
  return (
    fetch(BASE_URL + "signup", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Email already taken!");
      })
      // Parameter destructuring!
      .then(({ token }) => {
        tokenService.setToken(token);
      })
  );
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function setProfile() {
    // Saves profile data to localStorage
    // localStorage.setItem('profile', JSON.stringify(profile));
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then(res => {
      tokenService.setToken(res.token)
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })
    .then(res => {
        // this.setProfile(res);
        return Promise.resolve(res);
    });
}

export default {
  signup,
  getUser,
  logout,
  login,
};
