import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useSelectClass from "../../../Hooks/useSelectClass";
import { useNavigate } from "react-router-dom";
import useClasses from "../../../Hooks/useClasses";

const ClassCard = ({ card }) => {
  const {
    _id,
    className,
    image,
    instructor,
    instrument,
    price,
    seatsAvailable,
    totalStudents,
  } = card;

  const [, refetch1] = useSelectClass();
  const [, refetch2] = useClasses();

  const { user } = useAuth();

  const navigate = useNavigate();

  const handleSelectedClass = (card) => {
    //console.log(card);

    const selectedClass = {
      className,
      image,
      instructor,
      instrument,
      price,
      seatsAvailable,
      totalStudents,
      classId: _id,
      userEmail: user?.email,
    };

    if (user && user?.email) {
      fetch("http://localhost:3000/selectedClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch1();

          const remainingSeats = seatsAvailable - 1;
          const newTotalStudents = totalStudents + 1;

          fetch(`http://localhost:3000/classes/${selectedClass.classId}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ remainingSeats, newTotalStudents }),
          })
            .then((res) => res.json())
            .then((data) => {
              refetch2();

              if (card?.instructorId) {
                fetch(
                  `http://localhost:3000/instructorClasses/${card?.instructorId}`,
                  {
                    method: "PATCH",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({ remainingSeats, newTotalStudents }),
                  }
                )
                  .then((res) => res.json())
                  .then((data) => console.log("done"));
              }
            });

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "successfully class selected",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        title: "You need login first",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <div
        className={`card card-compact w-96 bg-base-100 shadow-xl rounded-none ${
          seatsAvailable === 0 && "border-[3px] border-red-600"
        }`}
      >
        <figure className="h-56">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {className}</h2>
          <p>Instrument: {instrument}</p>
          <p>Instructor: {instructor}</p>
          <p>Students: {totalStudents}</p>
          <p>Available Seats: {seatsAvailable}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button
              disabled={seatsAvailable === 0}
              onClick={() => handleSelectedClass(card)}
              className="btn btn-outline disabled:bg-gray-300  hover:bg-[color:var(--hoverColor2)] border-2 border-black rounded-none"
            >
              Select Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
