import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  
  test('renders the initial list of todos', () => {
    render(<TodoList />);
    
    // Check if main elements are rendered
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    expect(screen.getByTestId('todo-form')).toBeInTheDocument();
    
    // Check if initial todos are rendered using proper roles
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    
    // Check todo items are rendered as list items
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);
    
    // Check that the completed todo has correct aria attribute
    const completedTodo = screen.getByText('Build a Todo App');
    expect(completedTodo).toHaveAttribute('aria-checked', 'true');
  });

  test('adds a new todo when the form is submitted', () => {
    render(<TodoList />);
    
    // Use getByRole for better testing practices
    const input = screen.getByRole('textbox', { name: /add a new task/i });
    const button = screen.getByRole('button', { name: /add todo/i });
    
    // Simulate user typing and submitting
    fireEvent.change(input, { target: { value: 'Test New Todo' } });
    fireEvent.click(button);
    
    // Check if the new todo appears
    expect(screen.getByText('Test New Todo')).toBeInTheDocument();
    
    // Verify the todo count increased
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
    
    // Verify input is cleared
    expect(input.value).toBe('');
  });

  test('toggles todo completion status when clicked', () => {
    render(<TodoList />);
    
    // Get all todo toggle elements
    const todoToggles = screen.getAllByTestId('todo-toggle');
    const firstTodo = todoToggles[0];
    
    // Initial state should not be checked
    expect(firstTodo).toHaveAttribute('aria-checked', 'false');
    
    // Click to toggle to completed
    fireEvent.click(firstTodo);
    
    // Should now be checked
    expect(firstTodo).toHaveAttribute('aria-checked', 'true');
    expect(firstTodo).toHaveClass('completed-text');
    
    // Click again to toggle back
    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveAttribute('aria-checked', 'false');
  });

  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    const initialTodos = screen.getAllByRole('listitem');
    const deleteButtons = screen.getAllByTestId('delete-button');
    
    // Verify initial count
    expect(initialTodos).toHaveLength(2);
    
    // Click the first delete button
    fireEvent.click(deleteButtons[0]);
    
    // Should have one less todo item
    const remainingTodos = screen.getAllByRole('listitem');
    expect(remainingTodos).toHaveLength(1);
    
    // Verify the correct todo was removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('does not add empty todo when form is submitted', () => {
    render(<TodoList />);
    
    const initialCount = screen.getAllByRole('listitem').length;
    const button = screen.getByRole('button', { name: /add todo/i });
    
    // Submit form with empty input
    fireEvent.click(button);
    
    // Count should remain the same
    expect(screen.getAllByRole('listitem')).toHaveLength(initialCount);
  });

  test('handles keyboard toggle with spacebar', () => {
    render(<TodoList />);
    
    const todoToggles = screen.getAllByTestId('todo-toggle');
    const firstTodo = todoToggles[0];
    
    // Initial state
    expect(firstTodo).toHaveAttribute('aria-checked', 'false');
    
    // Simulate spacebar press
    fireEvent.keyPress(firstTodo, { key: ' ', code: 'Space' });
    
    // Should be toggled
    expect(firstTodo).toHaveAttribute('aria-checked', 'true');
  });
});
