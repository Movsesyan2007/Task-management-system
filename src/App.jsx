import React from "react";
import TaskBoard from "./components/TaskBoard";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Task Management Board</h1>
        <TaskBoard />
      </div>
    </TaskProvider>
  );
}

export default App;