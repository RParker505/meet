// src/components/CitySearch.js

import { useState } from "react";

const CitySearch = ({allLocations}) => {
    //showSuggestions is false by default - hide suggestion list to start
    const [showSuggestions, setShowSuggestions] = useState(false);
    //set state of input field so you can access its value
    const [query, setQuery] = useState("");
    //suggestions will hold the list of suggestions
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChanged = (event) => {
      const value = event.target.value;
      const filteredLocations = allLocations ? allLocations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      }) : [];
  
      setQuery(value);
      setSuggestions(filteredLocations);
    };

    const handleItemClicked = (event) => {
      const value = event.target.textContent;
      setQuery(value);
      setShowSuggestions(false); // to hide the list
    };
    
    return (
      <div id="city-search">
        <input
            type="text"
            className="city"
            placeholder="Search for a city"
            value={query}
            onFocus={() => setShowSuggestions(true)}
            onChange={handleInputChanged}
        />
        {/* if showSuggestions is true, render a ul element with a suggestions list. Otherwise, render a null */}
        {showSuggestions ?
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
          })}
          <li onClick={handleItemClicked} key='See all cities'>
            <b>See all cities</b>
          </li>
        </ul>
        : null
        }
      </div>
    )
   }
   
   export default CitySearch;