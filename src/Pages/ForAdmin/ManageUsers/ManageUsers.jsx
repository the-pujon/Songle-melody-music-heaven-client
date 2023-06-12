import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaPaypal, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const token = localStorage.getItem("access-token");

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  //  console.log(data);

  const handleRole = (role, user) => {
    //console.log(role, user);

    fetch(`http://localhost:3000/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userRole: role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (user) => {
    console.log(user);
  };

  return (
    <div>
      <div className="w-full px-8">
        <div className="text-4xl font-semibold text-center my-4">
          Manage Users
        </div>
        <div className="text-2xl font-semibold flex justify-between">
          <div>Total Classes: {users?.length}</div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        disabled={
                          user.role === "admin" || user.role === "instructor"
                        }
                        onClick={() => handleRole("admin", user)}
                        className={`btn btn-xs bg-[color:var(--secondaryColor)] text-white hover:bg-[color:var(--hoverColor1)] ${
                          user.role === "admin"
                            ? "disabled:bg-gray-400 border-0"
                            : "bg-black"
                        }`}
                      >
                        Admin
                      </button>
                      <button
                        disabled={
                          user.role === "admin" || user.role === "instructor"
                        }
                        onClick={() => handleRole("instructor", user)}
                        className={`btn btn-xs bg-[color:var(--secondaryColor)] text-white hover:bg-[color:var(--hoverColor1)] ${
                          user.role === "instructor"
                            ? "disabled:bg-gray-400 border-0"
                            : "bg-black"
                        }`}
                      >
                        Instructor
                      </button>
                    </td>

                    <td className="">
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-sm bg-[color:var(--secondaryColor)] text-white hover:bg-[color:var(--hoverColor1)]"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
