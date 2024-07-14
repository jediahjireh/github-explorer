// app.js

// import express and helmet libraries
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';

// create an instance of the express application
const app = express();

// use helmet for security to set HTTP headers
app.use(helmet());
// parse incoming JSON requests
app.use(json());
// parse incoming requests with URL-encoded payloads
app.use(urlencoded({ extended: false }));

// API route for searching GitHub users
app.get('/api/users', async (req, res) => {
  // get the search query from request
  const query = req.query.q;

  // check for empty query
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  try {
    // fetch user data from GitHub API
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from GitHub' });
  }
});

// API route for user details
app.get('/api/users/:username', async (req, res) => {
  const username = req.params.username;

  try {
    // fetch user details from GitHub API
    const userResponse = await fetch(`https://api.github.com/users/${username}`);

    // check if user exists
    if (userResponse.status === 404) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = await userResponse.json();

    // fetch user's repositories
    const reposResponse = await fetch(userData.repos_url);
    const reposData = await reposResponse.json();

    res.json({ user: userData, repos: reposData });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from GitHub' });
  }
});

// API route for repository details
app.get('/api/repos/:username/:repo', async (req, res) => {
  // destructure username and repo from parameters
  const { username, repo } = req.params;
  try {
    // fetch repository details from GitHub API
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
    const repoData = await response.json(); // parse response as JSON

    // fetch the latest 5 commits for the repository
    const commitsResponse = await fetch(`${repoData.commits_url.replace('{/sha}', '')}?per_page=5`);
    // parse response as JSON
    const commitsData = await commitsResponse.json();

    // send repository and commit data back to the client
    res.json({ repo: repoData, commits: commitsData });
  } catch (error) {
    // handle errors and send error response
    res.status(500).json({ error: 'Error fetching data from GitHub' });
  }
});

// export the express application
export default app;