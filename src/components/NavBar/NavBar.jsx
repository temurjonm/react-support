import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "../../pages/About/About";
import Services from "../../pages/Services/Services";
import Help from "../../pages/Help/Help";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignupForm from "../../pages/SignupForm/SignupForm";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import userService from "../../utils/userService";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //   state = {
  //     user: userService.getUser(),
  //   };

  //   handleLogout = () => {
  //     userService.logout();
  //     this.setState({
  //       user: null,
  //     });
  //   };

  const handleChange = (event) => {
    // setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let loginOrLogout = props.user ? (
    <div>
      <Link to="/">
        <MenuItem className="proIcon" onClick={props.handleLogout}>
          Log Out
        </MenuItem>
      </Link>
    </div>
  ) : (
    <div>
      <Link to="/login">
        <MenuItem className="proIcon">Log In</MenuItem>
      </Link>
      <Link to="/signup">
        <MenuItem className="proIcon">Sign Up</MenuItem>
      </Link>
    </div>
  );
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/about" className="navColor">
              About
            </Link>
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/services" className="navColor">
              Services
            </Link>
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/help" className="navColor">
              Help
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <div>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <Link to="/profile">
                <MenuItem className="proIcon">Profile</MenuItem>
              </Link>
              <Link to="/logout">
                <MenuItem className="proIcon" onClick={props.handleLogout}>
                  Log Out
                </MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Link to="/signup" className="navColor">
              SignUp
            </Link>
          </IconButton>

          <div>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem>Sign In</MenuItem>
              <MenuItem>SignUp</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar> */}
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/help" component={Help} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupForm} />
      </Switch>
    </Router>
  );
}
// const NavBar = (props) => {
//   let nav = props.user ? (
//     <React.Fragment>
//       {/* <Link to="/" className="NavBar-link">
//         HOME
//       </Link>
//       &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
//       <span className="NavBar-link">WELCOME - {props.user.name}</span>
//       &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
//       <Link to="" onClick={props.handleLogout} className="NavBar-link">
//         LOG OUT
//       </Link> */}
//       <h1>Navbar</h1>
//     </React.Fragment>
//   ) : (
//     <React.Fragment>
//       {/* <Link to="/signin" className="NavBar-link">
//         {" "}
//         LOG IN{" "}
//       </Link>
//       &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;
//       <Link to="/signup" className="NavBar-link">
//         {" "}
//         SIGN UP{" "}
//       </Link> */}
//       <
//     </React.Fragment>
//   );

//   return <div className="NavBar">{nav}</div>;
// };
