import React, {Component} from "react";
import axios from "axios";

class Register extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      passMess: "",
      emailMess: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.password.length < 4){
      this.setState({passMess:"Password need to at least have a length of 5!"});
    }
    else{
      axios.post("/api/register",{
        email: this.state.email,
        password: this.state.password
      }).then((res)=>{
        if(res.data === false){
          this.setState({
            passMess: "",
            emailMess: "User already exists!"
          })
        }
        else{
          localStorage.setItem("token",res.data.token);
          sessionStorage.setItem("id",res.data.id);
          console.log(localStorage.getItem("token"),sessionStorage.getItem("id"));
        }
      });
    }
  }

  render(){
    return(
      <div className="jumbotron">
        <div className="loginTitle">Register!</div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" onChange={this.handleChange} name="email" type="email"/>
            <small>{this.state.emailMess}</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" onChange={this.handleChange} name="password" type="password" />
            <small>{this.state.passMess}</small>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <a href="/login">Login!</a>
        </div>
        <div>
          <a href="/">Home</a>
        </div>
      </div>
    );
  }
}

export default Register;
