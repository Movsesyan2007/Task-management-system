import React, { useState, useContext } from 'react';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal';
import { TaskContext } from '../context/TaskContext';

const TaskBoard = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'TODO',
    priority: 'low',
    assignee: ''
  });

  const moveTask = (taskId, newStatus) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (taskToUpdate) {
      dispatch({
        type: "UPDATE_TASK",
        payload: { ...taskToUpdate, status: newStatus },
      });
    }
  };

  const handleAddTask = () => {
    const newTaskWithId = { ...newTask, id: Date.now() };
    dispatch({ type: "ADD_TASK", payload: newTaskWithId });
    setShowModal(false);
    setNewTask({ title: '', description: '', status: 'TODO', priority: 'low', assignee: '' });
  };

  return (
    <div className="task-board">
      {['TODO', 'DOING', 'DONE', 'BLOCKED'].map(status => (
        <TaskColumn
          key={status}
          status={status}
          tasks={tasks.filter(task => task.status === status)}
          moveTask={moveTask}
        />
      ))}
      <button onClick={() => setShowModal(true)} className="add-task-button">+ Add Task</button>

      {showModal && (
        <TaskModal
          task={newTask}
          setTask={setNewTask}
          onSave={handleAddTask}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default TaskBoard;