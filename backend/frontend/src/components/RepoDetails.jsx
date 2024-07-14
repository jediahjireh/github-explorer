// src/components/RepoDetails.jsx

// import React and necessary hooks
import React, { useEffect, useState } from "react";

// import the function to get repository details
import { getRepoDetails } from "../api.jsx";

// import the CSS file for custom styling
import "../styles/custom.css";

// define the RepoDetails component that receives a repository object as a prop
const RepoDetails = ({ repo }) => {
  // initialise state to store repository details
  const [repoDetails, setRepoDetails] = useState(null);

  // useEffect hook to fetch repository details when the component mounts or repo changes
  useEffect(() => {
    // define an async function to fetch data
    const fetchData = async () => {
      // pass username and repository name to get repository details
      const data = await getRepoDetails(repo.username, repo.name);
      // update state with the fetched data
      setRepoDetails(data);
    };
    // call the fetchData function
    fetchData();
  }, [repo]);

  // if repository details are not yet fetched show a loading message
  if (!repoDetails) return <div>Loading...</div>;

  // render the repository details
  return (
    <div>
      <hr />
      {/* repository name as a link to GitHub repository */}
      <h1 style={{ marginBottom: "10px", marginTop: "10px" }}>
        <a
          href={repoDetails.repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repoDetails.repo.name}
        </a>
      </h1>
      {/* display creation date and last commit date */}
      <h5>
        [Created: {new Date(repoDetails.repo.created_at).toLocaleDateString()} |
        Last commit:{" "}
        {new Date(repoDetails.repo.updated_at).toLocaleDateString()}]
      </h5>
      {/* display repository description */}
      <p>
        <i>{repoDetails.repo.description}</i>
      </p>
      <div>
        {/* container for the commit list */}
        <nav id="commit-list-container">
          {/* table to display commits */}
          <table id="commit-table">
            <thead>
              <tr>
                {/* single header row spanning two columns */}
                <th colSpan="2">Last 5 Commits</th>
              </tr>
            </thead>
            <tbody>
              {/* map through the last 5 commits in reverse order */}
              {repoDetails.commits
                .slice(0, 5)
                .reverse()
                .map((commit, index) => {
                  // get the commit message
                  const message = commit.commit.message;
                  // split the message at the first occurrence of \n\n
                  const parts = message.split("\n\n");
                  // text before \n\n
                  const displayMessage = parts[0];
                  // text after \n\n if exists (extended description)
                  const extendedDescription =
                    parts.length > 1 ? `: ${parts[1]}` : "";

                  return (
                    <tr key={commit.sha}>
                      {/* display the commit number from 5 to 1 */}
                      <td>{5 - index}</td>
                      {/* display the commit message and extended description */}
                      <td>{displayMessage + extendedDescription}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </nav>
      </div>
      <hr />
    </div>
  );
};

// export the RepoDetails component as default
export default RepoDetails;
