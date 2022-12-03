import React, { useEffect, useState } from "react";
import AcceptOrRejectProjectCard from "./AcceptOrRejectProjectCard";
import AcceptOrrejectProjectCard from "./AcceptOrRejectProjectCard";

const AcceptOrRejectProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/project", {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl mb-6">Accept or Reject Project</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-8">
        {projects.map((project) => (
          <AcceptOrRejectProjectCard
            key={project._id}
            project={project}
          ></AcceptOrRejectProjectCard>
        ))}
      </div>
    </div>
  );
};

export default AcceptOrRejectProject;
