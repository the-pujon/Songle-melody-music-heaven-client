import React from "react";
import useSelectClass from "../../../Hooks/useSelectClass";

import { FaPaypal, FaTrash } from "react-icons/fa";

const SelectedClass = () => {
  const [selectedClasses, refetch1] = useSelectClass();

  const total = selectedClasses.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (selectedClass) => {
    fetch(`http://localhost:3000/selectedClass/${selectedClass._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch1();

        const remainingSeats = selectedClass.seatsAvailable + 1;

        fetch(`http://localhost:3000/classes/${selectedClass.classId}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ remainingSeats }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("added");
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full px-8">
      <div className="text-4xl font-semibold text-center my-4">
        My Selected Classes
      </div>
      <div className="text-2xl font-semibold flex justify-between">
        <div>Total Classes: {selectedClasses.length}</div>
        <div>Total Payment: ${total}</div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Instrument</th>
                <th>Price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {selectedClasses.map((selectedClass) => (
                <tr key={selectedClass._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={selectedClass.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{selectedClass.className}</td>
                  <td>{selectedClass.instructor}</td>
                  <td>{selectedClass.instrument}</td>
                  <td>{selectedClass.price}</td>
                  <td className="">
                    <button
                      onClick={() => handleDelete(selectedClass)}
                      className="btn btn-xs bg-[color:var(--secondaryColor)] text-white hover:bg-[color:var(--hoverColor1)]"
                    >
                      <FaTrash />
                    </button>
                    <button
                      title="Payment"
                      className="btn btn-xs bg-[color:var(--secondaryColor)] text-white hover:bg-[color:var(--hoverColor1)]"
                    >
                      <FaPaypal />
                    </button>
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

export default SelectedClass;
