import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51NIBhSHkcuY3CefPvUijdLj28l4fJrqiHJuXjmMXHHMyXbFf1a9SrKtAc6tBU8GM9VhaiT6K9Q1eb5bNWQu7GIIC009YNPmpaQ"
);
const Payment = () => {
  const state = useLocation();

  const selectedClass = state?.state;
  console.log(selectedClass);
  const price = parseFloat(state?.state?.price);

  console.log(price);

  return (
    <div>
      <h1 className="text-4xl text-center">Payment Please</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm selectedClass={selectedClass} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
