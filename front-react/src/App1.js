import React from 'react';
import './App.css';
import TodoList from './TodoList';
import SecurityForm from './hooks/SecurityForm';

export default () => (
  <div className="App">
    <TodoList />
    <SecurityForm />
  </div>
);
