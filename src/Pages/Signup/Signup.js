import { Result } from "postcss";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, signUpWithGoogle } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User  Successfully Created");

        const userInfo = {
          displayName: data.name,
          userInfo: data.userType,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.userType);
          })
          .catch((err) => console.error(err));
      })

      .catch((err) => {
        console.error(err);
        setSignUpError(err.message);
      });
  };
  const handleGoogleSignUp = () => {
    return signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email, userType) => {
    const user = { name, email, userType };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center text-pink-600 my-4 font-bold">
          Please SignUp
        </h2>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="border my-2 px-10"
        >
          {/* user type */}
          <select {...register("userType")} className="mt-10">
            <option value="supervisor">Supervisor</option>
            <option value="librarian">Librarian</option>
            <option value="student">Student</option>
          </select>
          <div className="form-control my-2 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600"> {errors.password.message}</p>
            )}
          </div>
          <div className="form-control my-2 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600"> {errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "Password must be strong",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600"> {errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent my-4 w-full"
            value="signup"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have a account?
          <Link to="/login" className="text-secondary">
            Please Login
          </Link>
        </p>
        <div className="divider">X</div>
        <button onClick={handleGoogleSignUp} className="btn btn-primary w-full">
          SignUp WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
