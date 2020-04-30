import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar handlelog handleLogout={this.props.handleLogout} />
      </div>
    );
  }
}

export default Dashboard;
