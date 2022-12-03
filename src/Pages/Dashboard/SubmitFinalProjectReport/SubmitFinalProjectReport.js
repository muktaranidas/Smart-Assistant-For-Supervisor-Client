import React from "react";

const SubmitFinalProjectReport = () => {
  return (
    <div>
      <h2 className="text-3xl mb-6">Submit Your Final Project Report</h2>
      <div className="overflow-x-auto">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Video Presentation Upload Link
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Link"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">File upload option</span>
                  </label>
                  <input
                    type="text"
                    placeholder="FileUpload"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitFinalProjectReport;
