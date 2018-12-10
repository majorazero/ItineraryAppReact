import React from "react";

const ItePage = (props) => {
  return(
    <div className='container'>
      <button onClick={props.changeHotel}>I want to switch hotels!</button>
      <h1>{props.selectedHotel.name}</h1>
      <h2>{props.selectedHotel.location.display_address[0]}</h2>
      <h2>{props.selectedHotel.location.display_address[1]}</h2>
    </div>
  );
}

export default ItePage;
