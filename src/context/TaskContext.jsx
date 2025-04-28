import React, { createContext, useReducer } from 'react';

export const TaskContext = createContext();

const initialState = {
  tasks: [
    {
      id: 1,
      title: "React Study",
      description: "Learn Context and Reducer",
      status: "TODO",
      priority: "high",
      assignee: "Alice",
    },
    {
      id: 2,
      title: "API Integration",
      description: "Connect Task App to backend",
      status: "DOING",
      priority: "medium",
      assignee: "Bob",
    },
  ],
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
}

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};