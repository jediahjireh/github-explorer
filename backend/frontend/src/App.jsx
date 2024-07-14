// src/App.jsx

// import React and useState from the react library
import React, { useState } from "react";

// import the RepoDetails component
import RepoDetails from "./components/RepoDetails.jsx";

// import the SearchBox component
import SearchBox from "./components/SearchBox.jsx";

// import the UserDetails component
import UserDetails from "./components/UserDetails.jsx";

// import the CSS file for custom styling
import "./styles/custom.css";

// define the main App component
const App = () => {
  // initialise state to store search results
  const [searchResults, setSearchResults] = useState([]);

  // initialise state to store the selected user
  const [selectedUser, setSelectedUser] = useState(null);

  // initialise state to store the selected repository
  const [selectedRepo, setSelectedRepo] = useState(null);

  // function to handle the selection of a repository
  const handleRepoSelect = (username, repoName) => {
    // set the selected repository state with the username and repository name
    setSelectedRepo({ username, name: repoName });
  };

  // function to handle the selection of a user
  const handleUserSelect = (username) => {
    // set the selected user state with the username
    setSelectedUser(username);
    // reset the selected repository when a new user is selected
    setSelectedRepo(null);
  };

  // return the JSX for the App component
  return (
    // component div
    <div>
      {selectedUser ? (
        // div to hold user repo details if a user is selected
        <div id="user-details">
          {/* render the UserDetails component */}
          <UserDetails
            // pass appropriate username and function as props to the UserDetails component
            username={selectedUser}
            onRepoSelect={handleRepoSelect}
          />

          {/* render the RepoDetails component if a repository is selected */}
          {selectedRepo ? (
            // pass the selected repository as a prop to the RepoDetails component
            <RepoDetails repo={selectedRepo} />
          ) : (
            // when no repo is selected
            <br />
          )}
        </div>
      ) : (
        // div to hold the GitHub search functionality
        <div id="github-search">
          <h1>GitHub Explorer</h1>
          {/* render the SearchBox component */}
          <SearchBox
            // update state with search results
            onResults={(results) => setSearchResults(results.items || [])}
          />
          <br />
          {/* div to hold the search results */}
          <div>
            {/* map over the search results to create a list of users */}
            {searchResults.map((user) => (
              // div for each user with a unique key
              <nav key={user.id} id="results-list">
                {/* link button for each user that sets the selected user state when clicked */}
                <button onClick={() => handleUserSelect(user.login)}>
                  {/* display the user's login name */}
                  {user.login}
                </button>
              </nav>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// export the App component
export default App;
