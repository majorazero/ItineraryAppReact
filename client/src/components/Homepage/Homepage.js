import React, {Component} from "react";
import axios from "axios";

class Homepage extends Component {
  constructor(){
    super();

    let today = new Date();

    this.state = {
      destination: "",
      startDate:  today.toISOString().substring(0,10),
      endDate: ""
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
        <div className="jumbotron">
          <h1>Where do you want to go?</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Destination</label>
              <input onChange={this.handleChange} className="form-control" name="destination" type="text" />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input onChange={this.handleChange} className="form-control" name="startDate" type="date" value={this.state.startDate} />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input onChange={this.handleChange} className="form-control" name="endDate" type="date" />
            </div>
            <button type="submit">Lets Go!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Homepage;
