import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  // console.log("BookingData", booking);

  return (
    <div>
      <h2 className="text-2xl text-pink-400">
        Payment for
        <span className="text-pink-600 font-bold">{booking.productTitle}</span>
      </h2>
      <div className="w-96 my-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
