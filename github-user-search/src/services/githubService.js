// src/services/githubService.js
import axios from 'axios';

// Function to fetch user data from GitHub based on search parameters
export const fetchUserData = async (username, location, minRepos) => {
  let query = `q=${username}`;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `https://api.github.com/search/users?${query}`;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.error("GitHub API Error:", error);
    throw error;
  }
};
