import React, { useContext, useState } from "react";
import TaskContext from "../../context/taskContext";

export const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);
  const [description, setDescription] = useState("");
  const context = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "" && timeSpent > 0) {
      context.handleTaskSubmit({ taskName, timeSpent, description });
      setTaskName("");
      setTimeSpent(0);
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Time Spent (hours):
        <input
          type="number"
          value={timeSpent}
          onChange={(e) => setTimeSpent(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};
