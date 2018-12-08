import React, {Component} from "react";
import axios from "axios";
import InputPage from "../InputPage/InputPage.js";

class Homepage extends Component {
  constructor(){
    super();

    let today = new Date();

    this.state = {
      destination: "",
      startDate:  today.toISOString().substring(0,10),
      endDate: "",
      stage: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //still need to figure out how I want to save the date, probably locally.
    axios.post("/api/hotelSearch",{
      destination: this.state.destination
    }).then((res)=>{
      console.log(res.data);
    });
  }

  render(){
    return(
      <div>
        <div>
          <a href="/login">Login</a>
        </div>
        <div>
          <a href="/register">Register</a>
        </div>
        <InputPage
         startDate={this.state.startDate} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Homepage;
