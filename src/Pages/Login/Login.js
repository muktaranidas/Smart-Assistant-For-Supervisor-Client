import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, loginWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };
  const handleGoogleLogin = () => {
    return loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-[700px] flex justify-center items-center ">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center text-pink-600 my-4 font-bold">
          Please Login
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="border px-10">
          {/* email */}
          <div className="form-control my-2 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          {/* password */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}

            <label className="label">
              <span className="label-text my-2">Forget Password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent my-4 w-full"
            value="Login"
            type="submit"
          />
          <div className="text-red-600 mb-6 font-bold">
            {loginError && <p>{loginError}</p>}
          </div>
        </form>
        <p>
          New to WhichBook?{" "}
          <Link to="/signup" className="text-secondary">
            please SignUp First
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          Login WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
