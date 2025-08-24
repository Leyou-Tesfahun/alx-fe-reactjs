import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

// Describe block groups all tests for the TodoList component
describe('TodoList Component', () => {
  
  // Test 1: Initial Render - Verifies the component loads with initial todos
  test('renders the initial list of todos', () => {
    render(<TodoList />);
    
    // Check if initial demo todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    
    // Check that the completed todo has line-through styling
    const completedTodo = screen.getByText('Build a Todo App');
    expect(completedTodo).toHaveStyle('text-decoration: line-through');
  });

  // Test 2: Adding a New Todo - Tests the form submission functionality
  test('adds a new todo when the form is submitted', () => {
    render(<TodoList />);
    
    // Get the input and button elements
    const input = screen.getByPlaceholderText('Add a new task...');
    const button = screen.getByText('Add Todo');
    
    // Simulate user typing and submitting the form
    fireEvent.change(input, { target: { value: 'Test New Todo' } });
    fireEvent.click(button);
    
    // Check if the new todo appears in the list
    expect(screen.getByText('Test New Todo')).toBeInTheDocument();
    
    // Verify the input is cleared after submission
    expect(input.value).toBe('');
  });

  // Test 3: Toggling Todo Completion - Tests clicking on a todo to mark it complete/incomplete
  test('toggles the completion status of a todo when clicked', () => {
    render(<TodoList />);
    
    // Find the first todo (which is initially not completed)
    const todoElement = screen.getByText('Learn React');
    
    // Verify it's not completed initially
    expect(todoElement).not.toHaveStyle('text-decoration: line-through');
    
    // Click on it to toggle to completed
    fireEvent.click(todoElement);
    
    // Now it should be completed (have line-through)
    expect(todoElement).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back to incomplete
    fireEvent.click(todoElement);
    
    // Now it should not have line-through
    expect(todoElement).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Deleting a Todo - Tests the delete functionality
  test('deletes a todo when the delete button is clicked', () => {
    render(<TodoList />);
    
    // Find the first todo and its delete button
    const todoText = screen.getByText('Learn React');
    const deleteButtons = screen.getAllByText('Delete');
    const firstDeleteButton = deleteButtons[0]; // Get the delete button for the first todo
    
    // Verify the todo exists before deletion
    expect(todoText).toBeInTheDocument();
    
    // Click the delete button
    fireEvent.click(firstDeleteButton);
    
    // Check the todo is no longer in the document
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  // Test 5: Preventing Empty Todos - Tests that empty input doesn't create a todo
  test('does not add an empty todo when form is submitted with empty input', () => {
    render(<TodoList />);
    
    // Get initial count of todos
    const initialTodos = screen.getAllByRole('listitem').length;
    const button = screen.getByText('Add Todo');
    
    // Submit the form with empty input
    fireEvent.click(button);
    
    // Count should remain the same
    const currentTodos = screen.getAllByRole('listitem').length;
    expect(currentTodos).toBe(initialTodos);
  });
});
