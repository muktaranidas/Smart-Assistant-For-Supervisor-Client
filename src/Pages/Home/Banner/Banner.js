import React from "react";
import image from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200  ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">WhichBook News!</h1>
          <p className="py-6">
            WhichBook has absolutely got to be the first port of call for anyone
            looking to purchase second-hand books. It has a vast range of
            titles, especially for those which are more popular, and you can
            often find them cheaper on here than elsewhere. Also, you're very
            likely to be familiar with how it works already, including checking
            seller ratings and sorting by price.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
