// src/components/UserDetails.jsx

// import React and hooks useEffect and useState
import React, { useEffect, useState } from "react";

// import the getUserDetails function from the API module
import { getUserDetails } from "../api.jsx";

// import the CSS file for custom styling
import "../styles/custom.css";

// define the UserDetails component
const UserDetails = ({ username, onRepoSelect }) => {
  // initialise state to store user details
  const [user, setUser] = useState(null);
  // initialise state to store repositories of the user
  const [repos, setRepos] = useState([]);

  // useEffect to fetch user data when username changes
  useEffect(
    () => {
      const fetchData = async () => {
        // fetch user details from the API
        const data = await getUserDetails(username);

        // set the user state with fetched user data
        setUser(data.user);
        // set the repos state with fetched repositories
        setRepos(data.repos);
      };
      // call the fetchData function
      fetchData();
    },
    // dependency array includes username to re-run effect when it changes
    [username]
  );

  // render loading message if user data is not yet available
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      {/* link to open user's profile in new tab */}
      <h1 style={{ marginBottom: "0" }}>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          {user.login}
        </a>
      </h1>

      {/* display the user's name */}
      <h2 style={{ marginTop: "0" }}>{user.name}</h2>

      {/* display the user's avatar image */}
      <img src={user.avatar_url} alt={user.login} />

      {/* display the user's bio */}
      <p>{user.bio}</p>

      {/* header for repositories section */}
      <h3>Repositories</h3>

      {/* unordered list to display repositories */}
      <ul id="repo-list">
        {/* map over the repositories to create list items */}
        {repos.map((repo) => (
          // unique key for each list item
          <li key={repo.id}>
            {/* button to select the repository and pass user login and repo name */}
            <button onClick={() => onRepoSelect(user.login, repo.name)}>
              {/* display the repository name */}
              {repo.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export the UserDetails component
export default UserDetails;
