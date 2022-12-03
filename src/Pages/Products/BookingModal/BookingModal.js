import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ productItem, setProductItem }) => {
  const { name: productName, resalePrice } = productItem;
  const { user } = useContext(AuthContext);
  // console.log(user);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    // console.log(name, email, price, phone, location);

    const booking = {
      productTitle: productName,
      email,
      price,
      phone,
      name,
      location,
    };
    fetch(
      "https://b612-used-products-resale-server-side-gamma.vercel.app/bookings",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(booking),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setProductItem(null);
          toast.success("Booking Confirmed");
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{productName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              value={user?.displayName}
              readOnly
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              readOnly
              value={user?.email}
              className="input w-full input-bordered"
            />
            <input
              // name="email"
              type="text"
              readOnly
              value={productName}
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              value={resalePrice}
              readOnly
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="input w-full input-bordered btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
