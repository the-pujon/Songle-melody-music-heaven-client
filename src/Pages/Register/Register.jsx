import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import login1 from "../../assets/registration.gif";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

const Register = () => {
  const { registerWithEmail, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const confirmPass = data.confirmPass;
    const photoURL = data.photoURL;

    //console.log(name, email, password, confirmPass, photoURL);

    registerWithEmail(email, password)
      .then((data) => {
        //console.log(data);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log(data.user);

            const user = {
              name: data.user.displayName,
              email: data.user.email,
              photoURL: data.user.photoURL,
              role: "student",
            };

            console.log(user);
            fetch("https://backend-songle.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((d) => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Registration successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              });
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => console.error(first));
  };

  return (
    <div>
      <>
        <div className="hero min-h-screen bg-none text-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={login1} alt="" className="w-1/2" />

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body bg-transparent"
              >
                <div className="text-3xl text-center font-semibold text-[color:var(--secondaryColor)]">
                  Please Login
                </div>

                {/* name */}
                <div className="form-control relative mt-4">
                  <input
                    {...register("name")}
                    type="text"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                    placeholder="name"
                    style={{ borderBottom: "2px solid #a8adaf" }}
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>

                {/* email */}
                <div className="form-control relative my-6">
                  <input
                    {...register("email")}
                    type="email"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                    placeholder="email"
                    style={{ borderBottom: "2px solid #a8adaf" }}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
                {/* password */}
                <div className="form-control relative ">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    })}
                    type="password"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    style={{ borderBottom: "2px solid #a8adaf" }}
                    required
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase and one special
                      character.
                    </p>
                  )}
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                {/* confirm password */}
                <div className="form-control relative my-6">
                  <input
                    {...register("confirmPass")}
                    type="password"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                    placeholder="confirmPass"
                    style={{ borderBottom: "2px solid #a8adaf" }}
                    required
                  />
                  <label
                    htmlFor="confirmPass"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                </div>

                {/* photo URL */}
                <div className="form-control relative">
                  <input
                    {...register("photoURL")}
                    type="url"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                    placeholder="photoURL"
                    style={{ borderBottom: "2px solid #a8adaf" }}
                    required
                  />
                  <label
                    htmlFor="photoURL"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Photo URL
                  </label>
                </div>

                <div className="text-xs text-black">
                  Already have an account?
                  <Link to="/login" className="hover:text-gray-400">
                    Login
                  </Link>
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-[color:var(--secondaryColor)] hover:bg-[color:var(--hoverColor1)] border-0"
                  >
                    Register
                  </button>
                </div>

                <SocialLogin />
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
