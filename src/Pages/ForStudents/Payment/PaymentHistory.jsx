import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);

  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/payment").then((res) => setHistory(res.data));
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-3xl my-10">Enrolled Classes Name</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          {history.map((item, index) => (
            <div key={item._id} className="border-2 border-black   p-5">
              {" "}
              {index + 1}. {item.transactionId} --------- {item.className}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
