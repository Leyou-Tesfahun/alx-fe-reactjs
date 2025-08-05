import React, { useState } from 'react';
import { fetchUsersAdvanced } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchUsersAdvanced(searchTerm, location, minRepos);
      setUsers(data.items || []);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Search username..."
          className="w-full border rounded px-3 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full border rounded px-3 py-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum repos (optional)"
          className="w-full border rounded px-3 py-2"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          min="0"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-600">Looks like we can't find the user(s)</p>}

      <ul className="mt-6 space-y-4">
        {users.map(user => (
          <li key={user.id} className="border p-4 rounded flex items-center space-x-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline"
              >
                {user.login}
              </a>
              {user.location && <p className="text-sm text-gray-600">Location: {user.location}</p>}
              <p className="text-sm text-gray-600">Repos: {user.public_repos || 'N/A'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

