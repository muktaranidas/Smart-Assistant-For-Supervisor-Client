import React, { useEffect, useState } from "react";
import CheckProjectReportCard from "./CheckProjectReportCard";
import CheckprojectReportCard from "./CheckProjectReportCard";

const CheckProjectReport = () => {
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
      <h2 className="text-3xl mb-6">Check Project Report</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-8">
        {projects.map((project) => (
          <CheckProjectReportCard
            key={project._id}
            project={project}
          ></CheckProjectReportCard>
        ))}
      </div>
    </div>
  );
};

export default CheckProjectReport;
