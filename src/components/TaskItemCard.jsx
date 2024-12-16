import React from 'react';

function TaskItemCard({ task, onRemove, onToggle }) {


  return (
    
    <div className={`task-card ${task.isCompleted ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-controls">
        <button onClick={() => onToggle(task.id)}>
          {task.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button className="delete-btn" onClick={() => onRemove(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItemCard;
