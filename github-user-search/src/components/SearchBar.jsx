import { useState } from 'react';
import { fetchUserData } from '../services/githubApi';

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    const result = await fetchUserData(username);
    
    setIsLoading(false);
    if (result.error) {
      setError(result.error);
      setUserData(null);
    } else {
      setUserData(result.data);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p className="error">Looks like we can't find the user</p>}
      
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
