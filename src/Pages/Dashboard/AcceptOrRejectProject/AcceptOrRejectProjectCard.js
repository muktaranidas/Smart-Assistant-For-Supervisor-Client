import React from "react";

const AcceptOrRejectProjectCard = ({ project }) => {
  const { name, description, selectedTopic, supervisorInitial, id } = project;
  return (
    <div className="card w-96 bg-slate-500 shadow-xl mb-8">
      <div className="card-body  text-white">
        <h2 className="card-title">Name: {name}</h2>
        <p>Id: {id}</p>
        <p>SupervisorInitial: {supervisorInitial}</p>
        <p>SelectedTopic: {selectedTopic}</p>
        <p>Description: {description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Details</button>
          <button className="btn btn-primary">Accept</button>
          <button className="btn btn-primary">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default AcceptOrRejectProjectCard;
