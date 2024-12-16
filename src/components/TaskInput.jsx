import React, { useState } from 'react';

function TaskInput({ onTaskAdd }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDetails, setTaskDetails] = useState('');

  const submitTask = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDetails,
      isCompleted: false,
    };

    onTaskAdd(newTask);
    setTaskTitle('');
    setTaskDetails('');
  };

  return (
    <form className="task-input-section" onSubmit={submitTask}>
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={taskDetails}
        onChange={(e) => setTaskDetails(e.target.value)}
        
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
