import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker/Marker.js";

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
          <Marker
            lat= {this.state.center.lat}
            lng= {this.state.center.lng}
            text="A"
            >
          </Marker>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
