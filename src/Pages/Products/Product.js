import React from "react";

const Product = ({ product, setProductItem }) => {
  const {
    location,
    name,
    originalPrice,
    picture,
    resalePrice,
    sellersName,
    timeWhenItPosted,
    yearsOfUse,
  } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">old</div>
        </h2>
        <p className="text-xl font-bold">
          Location: <small>{location}</small>
        </p>
        <p className="text-xl font-bold">
          Original Price: <small>{originalPrice}</small>
        </p>
        <p className="text-xl font-bold">
          Resale Price: <small>{resalePrice}</small>
        </p>
        <p className="text-xl font-bold">
          Years of Use: <small>{yearsOfUse}</small>
        </p>
        <p className="text-xl font-bold">
          When Post: <small>{timeWhenItPosted}</small>
        </p>
        <p className="text-xl font-bold">
          Seller name: <small>{sellersName}</small>
        </p>
        <div className="card-actions justify-end">
          {/* <div className="btn btn-secondary">Book Now</div> */}
          <label
            onClick={() => setProductItem(product)}
            htmlFor="booking-modal"
            className="btn btn-secondary"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;
