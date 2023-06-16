import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);

  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/payment/${user.email}`)
      .then((res) => setHistory(res.data));
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-3xl my-10">Payment History</h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Class Name</th>
                <th>Transaction ID</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.className}</td>
                  <td>{item.transactionId}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
