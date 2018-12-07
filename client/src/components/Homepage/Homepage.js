import React, {Component} from "react";

class Homepage extends Component {
  constructor(){
    super();

    this.state = {
      destination: "",
      startDate: "",
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
    console.log(this.state);
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
              <input onChange={this.handleChange} className="form-control" name="startDate" type="date" />
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
