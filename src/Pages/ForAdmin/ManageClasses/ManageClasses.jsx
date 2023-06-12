import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FcFeedback, FcApproval } from "react-icons/fc";
import { MdDisabledByDefault } from "react-icons/md";
import axios from "axios";
import { GiCogLock } from "react-icons/gi";

const ManageClasses = () => {
  //  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { data: allClasses = [], refetch } = useQuery(
    ["allClasses"],
    async () => {
      const res = await axiosSecure.get(`/instructorClasses`);
      return res.data;
    }
  );

  const handleStatus = (instructorClass, status) => {
    const newClass = {
      instrument: instructorClass.instrument,
      image: instructorClass.photoURL,
      price: instructorClass.price,
      instructor: instructorClass.instructorName,
      seatsAvailable: instructorClass.seats,
      className: instructorClass.className,
      totalStudents: instructorClass.totalStudents,
      instructorId: instructorClass._id,
    };

    //console.log(instructorClass, status);
    fetch(`http://localhost:3000/instructorClasses/${instructorClass._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        refetch();

        if (status === "approved") {
          fetch("http://localhost:3000/classes", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newClass),
          })
            .then((res) => res.json)
            .then((d) => console.log("added in class"))
            .catch((err) => console.error(err));
        }
      });
  };

  const handleFeedback = (id, feedback) => {
    //console.log("form", id, feedback);
    fetch(`http://localhost:3000/instructorClasses/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => refetch())
      .catch((err) => console.error(err));
  };

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
                <th>Instructor</th>
                {/*<th>Instructor Email</th>*/}
                <th>Available Seats</th>
                <th>Student</th>
                <th>Price</th>
                <th>Status</th>

                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allClasses.map((instructorClass) => (
                <tr key={instructorClass._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={instructorClass.photoURL} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{instructorClass.className}</td>
                  <td>{instructorClass.instrument}</td>
                  <td>
                    {instructorClass.instructorName}
                    <br />
                    <span className="badge badge-ghost -ml-4 border-0 badge-sm">
                      {instructorClass.email}
                    </span>
                  </td>
                  {/*<td></td>*/}
                  <td>{instructorClass.seats}</td>
                  <td>{instructorClass.totalStudents}</td>
                  <td>{instructorClass.price}</td>
                  <td>{instructorClass.status}</td>

                  <td className="flex gap-2">
                    <button
                      title="approved"
                      disabled={
                        instructorClass.status === "approved" ||
                        instructorClass.status === "denied"
                      }
                      onClick={() => handleStatus(instructorClass, "approved")}
                      className={`btn btn-xs bg-[color:var(--secondaryColor)] text-white hover:bg-[color:var(--hoverColor1)] text-lg ${
                        instructorClass.status === "approved" &&
                        "disabled:bg-gray-400 border-0"
                      } `}
                    >
                      <FcApproval />
                    </button>
                    <button
                      disabled={
                        instructorClass.status === "approved" ||
                        instructorClass.status === "denied"
                      }
                      className={`btn btn-xs bg-[color:var(--secondaryColor)] text-white hover:bg-[color:var(--hoverColor1)] text-lg ${
                        instructorClass.status === "denied" &&
                        "disabled:bg-gray-400 border-0"
                      }`}
                      onClick={() => handleStatus(instructorClass, "denied")}
                    >
                      <MdDisabledByDefault />
                    </button>
                    {/*<button
                      className={`btn btn-xs bg-[color:var(--secondaryColor)] text-white hover:bg-[color:var(--hoverColor1)] `}
                    >

                    </button>*/}

                    <label
                      disabled={instructorClass.feedback !== "-"}
                      htmlFor={instructorClass._id}
                      className={`btn btn-xs bg-[color:var(--secondaryColor)] text-lg text-white hover:bg-[color:var(--hoverColor1)]  `}
                    >
                      <FcFeedback />
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id={instructorClass._id}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const feedback = e.target.feedback.value;
                          //  console.log(feedback);
                          handleFeedback(instructorClass._id, feedback);
                        }}
                        className="modal-box bg-[color:var(--secondaryColor)] text-white"
                      >
                        {/*<h3 className="font-bold text-lg">Hello!</h3>*/}
                        <textarea
                          name="feedback"
                          id=""
                          cols="60"
                          rows="7"
                          className="outline-none text-black bg-gray-200 rounded-2xl p-4"
                        ></textarea>
                        <div className="flex gap-4">
                          <button type="submit" className="modal-action">
                            <label
                              htmlFor={instructorClass._id}
                              className="btn"
                            >
                              send feedback
                            </label>
                          </button>
                          <div className="modal-action">
                            <label
                              htmlFor={instructorClass._id}
                              className="btn"
                            >
                              cancel feedback
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
