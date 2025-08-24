import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Todo List</h1>
      <div className="card">
        <TodoList />
      </div>
      <p className="read-the-docs">
        Click on the React logo to learn more
      </p>
    </div>
  );
}

export default App;
