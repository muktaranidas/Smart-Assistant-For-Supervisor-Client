import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-gamma.vercel.app/users"
      );
      const data = await res.json();
      //   console.log(data);
      return data;
    },
  });
  // const handleDeleteMyUser = (id) => {
  //   fetch(
  //     `https://b612-used-products-resale-server-side-gamma.vercel.app/users/${id}`,
  //     {
  //       method: "DELETE",
  //       headers: {
  //         authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         console.log("delete");
  //       }
  //     });
  // };

  return (
    <div>
      <h2 className="text-3xl">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>UserType</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.userType}</td>
                <td>
                  <button
                    // onClick={() => handleDeleteMyUser(user._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
