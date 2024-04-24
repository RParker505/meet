// src/components/Event.js

import { useState } from "react";

const Event = ({event}) => {

    //event description hidden by default, shown when button is clicked
    const[showDetails, setShowDetails] = useState(false);

    //When the button is clicked, the toggleDetails function is invoked, which toggles the value of showDetails state between true and false. 
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };

    return (
      <li className="event">
        <h2>{event.summary}</h2>
        <p>{event.created}</p>
        <p>{event.location}</p>
        {/* Toggle button text based on showDetails state */}
        <button className="DetailsButton" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {/* Conditionally render event description based on showDetails state */}
        {showDetails && <p className="details">{event.description}</p>}
      </li>
    );
  }
  
  export default Event;