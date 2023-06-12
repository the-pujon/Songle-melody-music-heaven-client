import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((data) => {
        const user = {
          name: data.user.displayName,
          email: data.user.email,
          photoURL: data.user.photoURL,
          role: "student",
        };

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
      .catch((err) => console.error(first));
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="form-control flex flex-row justify-center gap-4 ">
        {/* login with github button */}
        <div
          className="btn btn-circle  bg-[color:var(--secondaryColor)] hover:bg-[color:var(--hoverColor1)] border-0 "

          //onClick={handleGithubLogin}
        >
          <FaGithub className="text-3xl" />
        </div>
        <div
          //login with google button

          className="btn btn-circle  bg-[color:var(--secondaryColor)] hover:bg-[color:var(--hoverColor1)] border-0 "
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
