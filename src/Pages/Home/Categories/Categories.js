import { useQueries, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  // const [categories, setCategories] = useState([]);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(
        "https://b612-used-products-resale-server-side-gamma.vercel.app/categories"
      ).then((res) => res.json()),
  });

  return (
    <section className="my-16 ">
      <p className="text-center text-secondary font-bold text-3xl">
        All Categories
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;
