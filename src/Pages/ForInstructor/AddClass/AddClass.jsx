import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const className = data.name;
    const instrument = data.instrument;
    const photoURL = data.photoURL;
    const instructorName = data.instructorName;
    const email = data.email;
    const seats = data.seats;
    const price = data.price;
    const status = "pending";
    const totalStudents = 0;
    const feedback = "-";

    const newClass = {
      className,
      instrument,
      photoURL,
      instructorName,
      email,
      seats,
      price,
      status,
      totalStudents,
      feedback,
    };

    fetch("https://backend-songle.vercel.app/instructorClasses", {
      method: "POST",
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
      <h1 className="text-5xl text-center my-6">Add Class</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 flex gap-8 justify-center flex-col"
      >
        <div className="flex gap-8">
          {/* class name */}
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
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
              {...register("price")}
              placeholder="price"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-outline disabled:bg-gray-300  hover:bg-[color:var(--hoverColor2)] border-[1px] border-black rounded-none"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClass;
