// src/api.jsx

// function to search for users based on a query
export const searchUsers = async (query) => {
  // fetch data from the API with the search query
  const response = await fetch(`/api/users?q=${query}`);

  // return the response data as JSON
  return response.json();
};

// function to get details of a specific user
export const getUserDetails = async (username) => {
  // fetch user details data from the API for the specified username
  const response = await fetch(`/api/users/${username}`);

  // return the response data as JSON
  return response.json();
};

// function to get details of a specific repository of a user
export const getRepoDetails = async (username, repoName) => {
  // fetch repository details data from the API for the user's specified repository
  const response = await fetch(`/api/repos/${username}/${repoName}`);

  // return the response data as JSON
  return response.json();
};
