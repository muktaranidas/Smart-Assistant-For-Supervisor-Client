import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";

import Product from "./Product";

const Products = () => {
  const [productItem, setProductItem] = useState(null);

  const products = useLoaderData();
  // console.log(products);
  return (
    <div>
      <div className="grid  my-12 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            setProductItem={setProductItem}
          ></Product>
        ))}
      </div>
      {productItem && (
        <BookingModal
          productItem={productItem}
          setProductItem={setProductItem}
        ></BookingModal>
      )}
    </div>
  );
};

export default Products;
