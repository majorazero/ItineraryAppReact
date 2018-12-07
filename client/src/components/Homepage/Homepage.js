import React, {Component} from "react";
import axios from "axios";
import "./Homepage.css";

class Homepage extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get("/api/login").then((res)=>{
      console.log(res.data);
    });
  }

  render(){
    return(
      <div className="jumbotron">
        <div className="loginTitle">Login!</div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" onChange={this.handleChange} name="email" type="email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" onChange={this.handleChange} name="password" type="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Homepage;
