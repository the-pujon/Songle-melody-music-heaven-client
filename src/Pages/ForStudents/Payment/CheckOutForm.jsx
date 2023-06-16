import React, { useEffect, useState } from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = ({ selectedClass, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    //console.log(card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous user",
            name: user?.displayName || "anonymous user",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      console.log(transactionId);

      //console.log(selectedClass);

      const payment = {
        selectedClassId: selectedClass._id,
        classId: selectedClass.classId,
        instructorId: selectedClass?.instructorId,
        image: selectedClass?.image,
        instructorName: selectedClass?.instructor,
        price: selectedClass?.price,
        instrument: selectedClass?.instrument,
        name: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent.id,
        className: selectedClass.className,
        totalStudents: selectedClass.totalStudents,
      };

      axiosSecure
        .post("/payment", payment)
        .then((res) => console.log(res.data));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-xs text-white border-0 hover:bg-[color:var(--hoverColor1)] bg-[color:var(--secondaryColor)]"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600">
          Payment Successful with TransactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
