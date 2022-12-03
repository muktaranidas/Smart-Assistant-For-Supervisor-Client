import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132__340.png"
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-green-600">
            <span className="sr-only">Error</span>
            <div className="flex justify-center items-center h-full">4 0 4</div>
          </h2>

          <p className="text-red-400 text-4xl mb-8 font-bold">
            {error.statusText || error.message}
          </p>
          <button className="btn btn-primary">
            <Link to="/">
              <h2 classes="px-8 py-3 font-semibold rounded">
                Back to homepage
              </h2>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
