// src/ToDo.js
import React, { useState } from 'react';
import './dynamicCompoent.css';

function DynamicComponent() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">To-Do List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
          className="todo-input"
        />
        <button onClick={addTask} className="todo-button">Add Task</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-list-item">
            <p className={`todo-text ${task.completed ? 'todo-completed' : ''}`}>{task.text}</p>
            <div className="todo-action-buttons">
              <button onClick={() => toggleTaskCompletion(index)} className="todo-action-button complete">
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => removeTask(index)} className="todo-action-button remove">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicComponent;
