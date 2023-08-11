import React, { useContext } from "react";
import TaskContext from "../../context/taskContext";

export const TaskList = () => {
  const context = useContext(TaskContext);
  console.log(context);

  function calculateTotalHours(tasks) {
    let totalHours = 0;
    for (const task of tasks) {
      totalHours += task.timeSpent;
    }
    return totalHours;
  }
  return (
    <div className="list-container">
      <h2>Tasks</h2>
      <ul>
        {context.tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.taskName}</strong> - {task.timeSpent} hours
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
      <p className="total-hours">
        Total Hours: {calculateTotalHours(context.tasks)} hours
      </p>
    </div>
  );
};
