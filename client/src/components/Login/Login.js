import React, {Component} from "react";
import axios from "axios";
import "./Login.css";

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/login",{
      email: this.state.email,
      password: this.state.password
    }).then((res)=>{
      localStorage.setItem("token",res.data.token);
      sessionStorage.setItem("id",res.data.id);
      console.log(localStorage.getItem("token"),sessionStorage.getItem("id"));
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
        <div>
          <a href="/register">Register!</a>
        </div>
        <div>
          <a href="/">Home</a>
        </div>
      </div>
    );
  }
}

export default Login;
