import React from 'react';
import TaskItemCard from './TaskItemCard.jsx';

function TaskListDisplay({ tasks, onRemove, onToggle }) {

    
  const pendingTasks = tasks.filter(task => !task.isCompleted);
  const completedTasks = tasks.filter(task => task.isCompleted);

  return (
    <div className="task-lists">
      <div className="task-category">
        <h2>Pending Tasks</h2>
        {pendingTasks.length > 0 ? (
          pendingTasks.map(task => (
            <TaskItemCard
              key={task.id}
              task={task}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))
        ) : (
          <p>No pending tasks.</p>
        )}
      </div>

      <div className="task-category">
        <h2>Completed Tasks</h2>
        {completedTasks.length > 0 ? (
          completedTasks.map(task => (
            <TaskItemCard
              key={task.id}
              task={task}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))
        ) : (
          <p>No completed tasks.</p>
        )}
      </div>
    </div>
  );
}

export default TaskListDisplay;
