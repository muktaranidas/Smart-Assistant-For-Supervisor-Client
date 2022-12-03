import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    console.log(data);

    const product = {
      name: data.name,
      description: data.description,
      location: data.location,
      number: data.number,
      price: data.price,
      productcategory: data.productcategory,
      userType: data.userType,
      yearofpurchase: data.yearofpurchase,
    };

    // save product info to the database
    fetch(
      "https://b612-used-products-resale-server-side-gamma.vercel.app/addProducts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast.success(`${data.name} is added Successfully`);
        navigate("/dashboard/addProduct");
      });
  };

  return (
    <div>
      <h2 className="text-4xl">Add A Product</h2>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="border my-2 px-10   mx-auto"
      >
        {/* Condition  type */}
        <select {...register("userType")} className="mt-10 ">
          <option value="buyer">Good</option>
          <option value="seller">Excellent</option>
          <option value="admin">Fair</option>
        </select>
        {/* name */}
        <div className="form-control my-2 w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="input input-bordered w-full "
          />
          {errors.name && (
            <p className="text-red-600"> {errors.password.message}</p>
          )}
        </div>
        {/* price */}
        <div className="form-control my-2 w-full ">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("price", { required: "Price is required" })}
            type="text"
            className="input input-bordered w-full "
          />
          {errors.price && (
            <p className="text-red-600"> {errors.price.message}</p>
          )}
        </div>
        {/* number */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input
            {...register("number", {
              required: "Number is required",
            })}
            type="text"
            className="input input-bordered w-full "
          />
          {errors.number && (
            <p className="text-red-600"> {errors.number.message}</p>
          )}
        </div>
        {/* location */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            {...register("location", {
              required: "Location is required",
            })}
            type="text"
            className="input input-bordered w-full "
          />
          {errors.location && (
            <p className="text-red-600"> {errors.location.message}</p>
          )}
        </div>
        {/* productcategory */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">ProductCategory</span>
          </label>
          <input
            {...register("productcategory", {
              required: "productcategory is required",
            })}
            type="text"
            className="input input-bordered w-full "
          />
          {errors.productcategory && (
            <p className="text-red-600"> {errors.productcategory.message}</p>
          )}
        </div>
        {/* Description */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            {...register("description", {
              required: "Description is required",
            })}
            type="text"
            className="input input-bordered w-full "
          />
          {errors.description && (
            <p className="text-red-600"> {errors.description.message}</p>
          )}
        </div>
        {/* Year of purchase */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Year of Purchase</span>
          </label>
          <input
            {...register("yearofpurchase", {
              required: "yearofpurchase is required",
            })}
            type="text"
            className="input input-bordered w-full "
          />
          {errors.yearofpurchase && (
            <p className="text-red-600"> {errors.yearofpurchase.message}</p>
          )}
        </div>

        {/* button */}
        <input
          className="btn btn-accent my-4 w-full  "
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
