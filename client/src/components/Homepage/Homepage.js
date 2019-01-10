import React, {Component} from "react";
import axios from "axios";
import InputPage from "../InputPage/InputPage.js";
import HotelPage from "../HotelPage/HotelPage.js";
import ItePage from "../ItePage/ItePage.js";
import Map from "../Map/Map.js";

class Homepage extends Component {
  constructor(){
    super();
    let today = new Date();
    this.state = {
      destination: "",
      startDate:  today.toISOString().substring(0,10),
      endDate: "",
      hotel: "",
      stage: 0,
      selectedHotel: ""
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
      this.setState({
        hotel: res.data,
        stage: 1
      })
    });
  }

  handleHotelSubmit = (item) => {
    this.setState({
      selectedHotel: item,
      stage: 2
    })
  }

  stage = () => {
    if(this.state.stage === 0){
      return  <InputPage
       startDate={this.state.startDate} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>;
    }
    else if(this.state.stage === 1){
      return <HotelPage hotel={this.state.hotel}
      homepageReturn={()=>{
        this.setState({stage: 0});
      }}
      itePage={(item)=>{
        this.handleHotelSubmit(item);
      }}/>;
    }
    else if(this.state.stage === 2){
      return <ItePage selectedHotel={this.state.selectedHotel}
      changeHotel={()=>{this.setState({stage:1})}}/>;
    }
    else if(this.state.stage === 3){
      return <Map />;
    }
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
        {this.stage()}
      </div>
    );
  }
}

export default Homepage;
