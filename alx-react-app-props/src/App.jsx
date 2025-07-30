import React from 'react';
import Counter from './components/Counter';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <ProfilePage />
        <Counter />
      </div>
    </UserContext.Provider>
  );
}

export default App;