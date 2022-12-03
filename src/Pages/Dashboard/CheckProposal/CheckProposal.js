import React, { useEffect, useState } from "react";
import CheckProposalCard from "./CheckProposalCard";

const CheckProposal = () => {
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
  console.log(projects);

  return (
    <div>
      <h2 className="text-3xl mb-6">Check Proposal</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-8">
        {projects.map((project) => (
          <CheckProposalCard
            key={project._id}
            project={project}
          ></CheckProposalCard>
        ))}
      </div>
    </div>
  );
};

export default CheckProposal;
