import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { name, picture, description, _id } = category;
  return (
    <div className="card my-12 w-96 bg-base-100 shadow-xl w-full">
      <figure>
        <img src={picture} alt="Shoes" className="w-1/2" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>

        <div className="card-actions justify-end">
          <Link to={`/categories/${_id}`}>
            <button className="btn btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
