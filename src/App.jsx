import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput.jsx';
import TaskListDisplay from './components/TaskListDisplay.jsx';
import './index.css'

function App() {
  
  const [taskRecords, setTaskRecords] = useState(
    JSON.parse(localStorage.getItem('taskDataStore')) || []
  );

  useEffect(() => {
    localStorage.setItem('taskDataStore', JSON.stringify(taskRecords));
  }, [taskRecords]);

  const addNewTask = (task) => {
    setTaskRecords([...taskRecords, task]);
  };

  const removeTaskRecord = (id) => {
    setTaskRecords(taskRecords.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTaskRecords(
      taskRecords.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="main-container">
      <h1>TO-DO App</h1>
      <TaskInput onTaskAdd={addNewTask} />
      <TaskListDisplay
        tasks={taskRecords}
        onRemove={removeTaskRecord}
        onToggle={toggleTaskCompletion}
      />
    </div>
  );
}

export default App;
