import axios from 'axios';

export const fetchUsersAdvanced = async (username, location, minRepos) => {
  let query = username || '';

  if (location) {
    query += ` location:${location}`;
  }
  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url);
  return response.data;  // contains { total_count, items: [...] }
};
