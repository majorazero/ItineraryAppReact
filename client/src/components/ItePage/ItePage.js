import React from "react";
import Map from "../Map/Map.js";

const ItePage = (props) => {
  console.log(props);
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <Map
            lat={props.selectedHotel.coordinates.latitude}
            lng={props.selectedHotel.coordinates.longitude}/>
        </div>
        <div className='col-md-6'>
          <button onClick={props.changeHotel}>I want to switch hotels!</button>
          <h1>{props.selectedHotel.name}</h1>
          <h2>{props.selectedHotel.location.display_address[0]}</h2>
          <h2>{props.selectedHotel.location.display_address[1]}</h2>
        </div>
      </div>
    </div>
  );
}

export default ItePage;
