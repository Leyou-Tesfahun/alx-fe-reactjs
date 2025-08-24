import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li 
      className={`todo-item ${todo.completed ? 'completed' : ''}`} 
      role="listitem"
      data-testid={`todo-item-${todo.id}`}
    >
      <span
        onClick={() => onToggle(todo.id)}
        className={todo.completed ? 'completed-text' : ''}
        role="checkbox"
        aria-checked={todo.completed}
        tabIndex={0}
        onKeyPress={(e) => e.key === ' ' && onToggle(todo.id)}
        data-testid="todo-toggle"
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
        data-testid="delete-button"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
