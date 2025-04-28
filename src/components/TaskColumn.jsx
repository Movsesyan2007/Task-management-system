import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ status, tasks, moveTask }) => {
  return (
    <div className={`task-column ${status.toLowerCase()}`}>
      <h2>{status}</h2>
      <div className="task-cards">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} moveTask={moveTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;