import React from "react";

const SpecialBook = () => {
  return (
    <div className="hero my-12 bg-pink-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Special Gift</h1>
          <p className="py-6">
            Those who buy 10 books will get 1 book free. Buy 20 books and get 2
            books free. Buy 30 books and get 3 books free. Buy 40 books and get
            4 books free. Buy 50 books and get 10 books free.
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialBook;
