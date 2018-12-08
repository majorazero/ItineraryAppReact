import React from "react";

const InputPage = (props) => {
  return(
    <div className="jumbotron">
      <h1>Where do you want to go?</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>Destination</label>
          <input onChange={props.handleChange} className="form-control" name="destination" type="text" />
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input onChange={props.handleChange} className="form-control" name="startDate" type="date" value={props.startDate} />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input onChange={props.handleChange} className="form-control" name="endDate" type="date" />
        </div>
        <button type="submit">Lets Go!</button>
      </form>
    </div>
  );
};

export default InputPage;
