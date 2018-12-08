import React from "react";
import "./HotelPage.css";


const HotelPage = (props) => {
  return(
    <div className = 'container'>
      <h1>Here are some hotels!</h1>
      <button onClick={props.homepageReturn}>Changed my mind, take me back!</button>
      {props.hotel.map((item)=>{
        return (
          <div onClick={props.itePage} key={item.id} className='row hotelSelect'>
            <div className='col-md-3'>
              <img className="img-fluid hotelImage" src={item.image_url} alt={item.name}/>
            </div>
            <div className = 'col-md-9'>
              <h4>{item.name}</h4>
              <h5>{item.price}</h5>
              <h5>{item.rating} {item.review_count} Reviews</h5>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HotelPage;
