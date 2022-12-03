import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const SubmitProposal = () => {
  // const { user } = useContext(AuthContext);
  const handleSubmitProjectProposal = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const id = form.id.value;
    const title = form.title.value;
    const email = form.email.value;
    // const projectTitle = form.projectTitle.value;
    const department = form.department.value;
    const faculty = form.faculty.value;
    const description = form.description.value;
    console.log(
      name,
      title,
      email,
      // projectTitle,
      id,
      faculty,
      department,
      description
    );
    const submitProposal = {
      name,
      title,
      email,
      // projectTitle,
      id,
      faculty,
      department,
      description,
    };
    fetch("http://localhost:5000/submitProposal", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(submitProposal),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        // toast.success(`${data.name} is added Successfully`);
        // navigate("/dashboard/addProduct");
        console.log(result);
      });
  };

  return (
    <div>
      <h2 className="text-3xl ">Submit Your Proposal</h2>
      <div className="overflow-x-auto">
        <div className="w-96">
          <h2 className="text-2xl text-center text-white mt-4 font-bold">
            Submit Your Proposal
          </h2>
          <form onSubmit={handleSubmitProjectProposal}>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control my-2 w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Id</span>
              </label>
              <input
                type="text"
                name="id"
                placeholder="Your Id"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control my-2 w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control my-2 w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Department</span>
              </label>
              <input
                type="text"
                name="department"
                placeholder="Department"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control my-2 w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Faculty</span>
              </label>
              <input
                type="text"
                name="faculty"
                placeholder="Faculty"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-white">
                  Project Proposal Title
                </span>
              </label>
              <input
                placeholder="title"
                type="text"
                name="title"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-white">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea  input-bordered"
                placeholder="description"
              ></textarea>
            </div>

            <input
              className="btn btn-secondary font-bold my-4 w-full"
              value="submit"
              type="submit"
            />
            <div className="text-red-600 mb-6 font-bold"></div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SubmitProposal;
