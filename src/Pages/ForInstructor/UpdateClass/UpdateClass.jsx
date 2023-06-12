import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const { user } = useAuth();

  const instructorClass = useLocation().state;
  console.log(instructorClass);

  const {
    _id,
    className,
    //email,
    //instructorName,
    instrument,
    photoURL,
    price,
    seats,
  } = instructorClass;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newClassName = data.name;
    const newPhotoURL = data.photoURL;
    const newInstrument = data.instrument;
    const newInstructorName = data.instructorName;
    const newEmail = data.email;
    const newSeats = data.seats;
    const newPrice = data.price;

    const newClass = {
      newClassName,
      newPhotoURL,
      newInstrument,
      newInstructorName,
      newEmail,
      newSeats,
      newPrice,
    };

    fetch(`https://backend-songle.vercel.app/instructorClasses/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((result) => {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <div>
        <h1 className="text-5xl text-center my-6">Update Class</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 flex gap-4 justify-center flex-col"
        >
          <div className="flex gap-8">
            {/* class name */}
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input
                type="text"
                defaultValue={className}
                {...register("name")}
                placeholder="class name"
                className="input input-bordered w-full  "
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Instrument</span>
              </label>
              <input
                type="text"
                defaultValue={instrument}
                {...register("instrument")}
                placeholder="instrument"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* Class Image */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Class Image URL</span>
            </label>
            <input
              type="url"
              defaultValue={photoURL}
              {...register("photoURL")}
              placeholder="image url"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-8">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                defaultValue={user.displayName}
                {...register("instructorName")}
                readOnly
                placeholder="instructor name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="email"
                defaultValue={user.email}
                {...register("email")}
                readOnly
                placeholder="instructor email"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                defaultValue={seats}
                type="number"
                {...register("seats")}
                placeholder="seats"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                {...register("price")}
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline mt-3 disabled:bg-gray-300  hover:bg-[color:var(--hoverColor2)] border-[1px] border-black rounded-none"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
