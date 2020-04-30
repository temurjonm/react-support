  import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import userService from "../../utils/userService";
import { Redirect } from 'react-router-dom';
import "./LoginPage.css";

class LoginPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      pw: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      userService.login(this.state)
          .then((res) => {
            return <Redirect to={"services"}/>
          });

    } catch (err) {
      console.log(err);
      // Use a modal or toast in your apps instead of alert
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <header className="header-footer">Log In</header>
          <div className="form-group">
            <div className="col-sm-12">
              <TextField
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <TextField
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <Button type="submit" variant="contained" color="primary" onClick={this.handleSubmit}>
                Log in
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
