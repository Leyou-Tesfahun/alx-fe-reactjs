import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  
  test('renders the initial list of todos', () => {
    render(<TodoList />);
    
    // Use getByRole for better accessibility testing
    expect(screen.getByRole('heading', { name: /my todo list/i })).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    
    // Check todo items are rendered as list items
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);
  });

  test('adds a new todo when the form is submitted', () => {
    render(<TodoList />);
    
    // Use getByRole for form elements
    const input = screen.getByRole('textbox', { name: /add a new task/i });
    const button = screen.getByRole('button', { name: /add todo/i });
    
    fireEvent.change(input, { target: { value: 'Test New Todo' } });
    fireEvent.click(button);
    
    expect(screen.getByText('Test New Todo')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('toggles todo completion status when clicked', () => {
    render(<TodoList />);
    
    // Get the first todo item's checkbox
    const todoCheckbox = screen.getAllByRole('checkbox')[0];
    
    // Initial state should not be checked
    expect(todoCheckbox).toHaveAttribute('aria-checked', 'false');
    
    // Click to toggle
    fireEvent.click(todoCheckbox);
    
    // Should now be checked
    expect(todoCheckbox).toHaveAttribute('aria-checked', 'true');
  });

  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    const initialTodos = screen.getAllByRole('listitem');
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    
    // Click the first delete button
    fireEvent.click(deleteButtons[0]);
    
    // Should have one less todo item
    const remainingTodos = screen.getAllByRole('listitem');
    expect(remainingTodos).toHaveLength(initialTodos.length - 1);
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const initialCount = screen.getAllByRole('listitem').length;
    const button = screen.getByRole('button', { name: /add todo/i });
    
    fireEvent.click(button);
    
    // Count should remain the same
    expect(screen.getAllByRole('listitem')).toHaveLength(initialCount);
  });
});
