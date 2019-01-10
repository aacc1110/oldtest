import React from 'react';
import './App.css';
import TodoList from './TodoList';
import securityForm from './SecurityForm';

export default () => (
  <div className="App">
    <TodoList />
    <securityForm />
  </div>
);
