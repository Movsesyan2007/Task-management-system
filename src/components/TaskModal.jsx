import React from 'react';

function TaskModal({ task, setTask, onSave, onClose }) {
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-heading">Add New Task</h2>
        <input
          name="title"
          value={task.title}
          onChange={handleChange}
          className="input-field"
          placeholder="Task Title"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="input-field"
          placeholder="Task Description"
        />
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="input-field"
        >
          <option value="TODO">TODO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
          <option value="BLOCKED">BLOCKED</option>
        </select>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className="input-field"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          name="assignee"
          value={task.assignee}
          onChange={handleChange}
          className="input-field"
          placeholder="Assignee"
        />

        <div className="button-container">
          <button onClick={onSave} className="button-save">
            Save
          </button>
          <button onClick={onClose} className="button-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;