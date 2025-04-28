import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskCard = ({ task, moveTask }) => {
  const { dispatch } = useContext(TaskContext);

  const handleMove = (newStatus) => {
    moveTask(task.id, newStatus);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Assignee:</strong> {task.assignee}</p>
      <div className={`priority ${task.priority}`}>
        {task.priority} Priority
      </div>
      <div className="task-actions">
        {task.status !== 'TODO' && <button onClick={() => handleMove('TODO')}>Move to TODO</button>}
        {task.status !== 'DOING' && <button onClick={() => handleMove('DOING')}>Move to DOING</button>}
        {task.status !== 'DONE' && <button onClick={() => handleMove('DONE')}>Move to DONE</button>}
        {task.status !== 'BLOCKED' && <button onClick={() => handleMove('BLOCKED')}>Move to BLOCKED</button>}
        <button onClick={handleDelete} className="delete-button">
           Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;