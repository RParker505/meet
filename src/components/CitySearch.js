// src/components/CitySearch.js

import { useState } from "react";

const CitySearch = () => {
    //showSuggestions is false by default - hide suggestion list to start
    const [showSuggestions, setShowSuggestions] = useState(false);
    
    return (
      <div id="city-search">
        <input
            type="text"
            className="city"
            placeholder="Search for a city"
            onFocus={() => setShowSuggestions(true)}
        />
        {/* if showSuggestions is true, render a ul element with a suggestions list. Otherwise, render a null */}
        {showSuggestions ? <ul className="suggestions"></ul> : null}
      </div>
    )
   }
   
   export default CitySearch;