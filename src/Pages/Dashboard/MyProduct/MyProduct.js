import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const MyProduct = () => {
  const [deletingMyProduct, setDeletingMyProduct] = useState(null);

  const closeModal = () => {
    setDeletingMyProduct(null);
  };

  const {
    data: addProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["addProducts"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://b612-used-products-resale-server-side-gamma.vercel.app/addProducts",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const handleDeleteMyProduct = (addProduct) => {
    fetch(
      `https://b612-used-products-resale-server-side-gamma.vercel.app/addProducts/${addProduct._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Product ${addProduct.name}  deleted successfully`);
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>My Product</h2>
      <div className="overflow-x-auto mt-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Status </th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {addProducts?.length > 0 &&
              addProducts?.map((addProduct, i) => (
                <tr key={addProduct._id}>
                  <th>{1 + i}</th>
                  <td>{addProduct.name}</td>
                  <td>{addProduct.price}</td>
                  <td>
                    <button className="btn btn-sm btn-error">UnSold</button>
                  </td>
                  <td>
                    <label
                      onClick={() => setDeletingMyProduct(addProduct)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingMyProduct && (
        <ConfirmationModal
          title={`Are You Sure You Want To Delete?`}
          message={`If You delete ${deletingMyProduct.name}. It cannot be undone`}
          successAction={handleDeleteMyProduct}
          successButtonName="Delete"
          modalData={deletingMyProduct}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProduct;
