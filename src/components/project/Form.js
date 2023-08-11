import React, { useContext, useState } from "react";
import ProjectContext from "../../context/projectContext";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const project = useContext(ProjectContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim() !== "") {
      project.handleProjectSubmit(projectName);
      setProjectName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Project Name:
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </label>
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
