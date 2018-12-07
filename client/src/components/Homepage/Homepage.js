import React, {Component} from "react";

class Homepage extends Component {
  constructor(){
    super();

    this.state = {

    };
  }

  render(){
    return(
      <div>
        <h1>HOMEPAGE</h1>
        <div>
          <a href="/login">Login</a>
        </div>
        <div>
          <a href="/register">Register</a>
        </div>
      </div>
    );
  }
}

export default Homepage;
