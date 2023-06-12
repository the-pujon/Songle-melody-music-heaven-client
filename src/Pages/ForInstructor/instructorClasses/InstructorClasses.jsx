import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const InstructorClasses = () => {
  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { data: instructorClasses = [], refetch } = useQuery(
    ["instructorClasses", user?.email],
    async () => {
      const res = await axiosSecure.get(`/instructorClasses/${user?.email}`);
      return res.data;
    }
  );

  console.log(instructorClasses);

  return (
    <div>
      <h1 className="text-5xl text-center my-6">Add Class</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instrument</th>
                {/*<th>Instructor Name</th>
                <th>Instructor Email</th>*/}
                <th>Available Seats</th>
                <th>Total Student</th>
                <th>Price</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {instructorClasses.map((instructorClass) => (
                <tr key={instructorClass._id}>
                  <th>
                    <img src={instructorClass.photoURL} alt="" />
                  </th>
                  <td>{instructorClass.className}</td>
                  <td>{instructorClass.instrument}</td>
                  <td>{instructorClass.seats}</td>
                  <th>{instructorClass.totalStudents}</th>
                  <th>{instructorClass.price}</th>
                  <th>{instructorClass.status}</th>
                  <th>{instructorClass.feedback}</th>
                  <th>
                    <button
                      className={`btn btn-xs bg-[color:var(--secondaryColor)] text-white hover:bg-[color:var(--hoverColor1)] `}
                    >
                      Update
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorClasses;
