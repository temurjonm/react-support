import React, { Component } from "react";
import userService from "../../utils/userService";
import { TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./SignupForm.css";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.history.push("/login");
      // this.props.handleSignupOrLogin();
      // this.props.history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <p>Thank you for joining!</p>
        <p>Sign up with </p>
        <div className="sign-in-with">
          <FacebookIcon
            className="facebook"
            style={{ fontSize: 60 }}
            color="primary"
          />
          <h4> OR </h4>
          <img
            style={{ width: 50, height: 50 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
          />
        </div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="SignupForm">
            <header className="header-footer">Sign Up</header>
            <div className="form-group">
              <div className="col-sm-12">
                <TextField
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={this.handleChange}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <TextField
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={this.handleChange}
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <TextField
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.handleChange}
                  id="outlined-basic"
                  label="password"
                  variant="outlined"
                />
              </div>
            </div>
            <Button
              className="sumbit-button"
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
