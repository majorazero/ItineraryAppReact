import React, {Component} from "react";
import GoogleMapReact from "google-map-react";

class Map extends Component  {

  constructor(props){
    super(props);
    this.state={
      zoom: 15,
      center: {
        lat: props.lat,
        lng: props.lng
      }
    };
  }

  render() {
    console.log(this.state);
    return(
      <div style={{height: '50vh', width: "50vh"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAF1UgxUH_4QsFZUkqJI3_ks0LfHDBvY8o" }}
         defaultCenter={this.state.center}
         defaultZoom={this.state.zoom}
          >
          <div
            lat= {this.state.center.lat}
            lng= {this.state.center.lng}
            className='marker'
            >
            A
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
