import React, { useContext } from "react";
import ProjectContext from "../../context/projectContext";

const ProjectList = () => {
  const context = useContext(ProjectContext);

  return (
    <div className="list-container">
      <h2>Projects</h2>
      <ul>
        {context.projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
