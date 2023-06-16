import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const EnrolledClass = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  const { user } = useAuth();
  console.log(user.email);

  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/payment/${user.email}`)
      .then((res) => setEnrolledClasses(res.data));
  }, []);
  console.log(enrolledClasses);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-3xl my-10">Enrolled Classes Name</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Instrument</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {enrolledClasses.map((item) => (
              <tr>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.instrument}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
