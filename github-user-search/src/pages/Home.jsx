// src/pages/Home.jsx
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';
import styles from './Home.module.css'; // CSS Modules recommended

function Home() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    console.log('Searching for:', query);
    // API implementation will go here
  };

  return (
    <div className={styles.container}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserList users={users} />
    </div>
  );
}

export default Home;
