import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form" data-testid="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        role="textbox"
        aria-label="Add a new task"
        data-testid="todo-input"
      />
      <button 
        type="submit" 
        role="button" 
        aria-label="Add todo"
        data-testid="add-todo-button"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
