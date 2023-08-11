import React, { useState } from "react";
import ProjectForm from "./components/project/Form";
import ProjectList from "./components/project/List";
import { TaskForm } from "./components/task/Form";
import { TaskList } from "./components/task/List";
import "./App.css";
import ProjectContext from "./context/projectContext";
import TaskContext from "./context/taskContext";

function App() {
  // fetching details
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleProjectSubmit = (projectName) => {
    setProjects([...projects, projectName]);
  };

  const handleTaskSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <ProjectContext.Provider value={{ projects, handleProjectSubmit }}>
      <TaskContext.Provider value={{ tasks, handleTaskSubmit }}>
        <div className="App">
          <div className="wrapper">
            <h1>Time Tracking App</h1>
            <div className="form-container">
              <ProjectForm />
              <ProjectList />
            </div>
            <div className="form-container">
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskContext.Provider>
    </ProjectContext.Provider>
  );
}

export default App;
