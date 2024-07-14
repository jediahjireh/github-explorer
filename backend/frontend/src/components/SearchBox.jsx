// src/components/SearchBox.jsx

// import React and useState from the react library
import React, { useState } from "react";

// import the searchUsers function from the API module
import { searchUsers } from "../api.jsx";

// import the CSS file for custom styling
import "../styles/custom.css";

// define the SearchBox component
const SearchBox = ({ onResults }) => {
  // initialise state to store the search query
  const [query, setQuery] = useState("");

  // function to handle the search action
  const handleSearch = async () => {
    // fetch search results from the API using the query
    const results = await searchUsers(query);
    // pass the results back to the parent component
    onResults(results);
  };

  return (
    <div>
      <div class="search-container">
        {/* render an input field for user to enter search query */}
        <input
          type="search"
          id="search-box"
          placeholder="Search..."
          // bind the input value to the query state
          value={query}
          // update query state when the input value changes
          onChange={(e) => setQuery(e.target.value)}
        />{" "}
        {/* button to trigger the search action */}
        <button onClick={handleSearch} id="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

// export the SearchBox component
export default SearchBox;
