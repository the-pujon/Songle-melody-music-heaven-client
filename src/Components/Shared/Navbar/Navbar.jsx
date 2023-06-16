import React, { useContext } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

import "./Navbar.scss";

import useAuth from "../../../Hooks/useAuth";

//import { SiGoogleclassroom } from "react-icons/si";
import useSelectClass from "../../../Hooks/useSelectClass";
import education from "../../../assets/classroom.png";
import logo from "../../../assets/logo2.png";
import useRole from "../../../Hooks/useRole";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();
  //console.log(user, loading);

  const [role] = useRole();

  const [selectedClasses] = useSelectClass();

  const pathName = useLocation().pathname;

  const noHeaderFooter = pathName === "/login" || pathName === "/register";

  const handleLogOut = () => {
    logOut().then(() => console.log("logout"));
  };

  const navbarOption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      <li>
        <NavLink
          to={`/dashboard/${
            role === "admin"
              ? "manageUsers"
              : role === "instructor"
              ? "myClasses"
              : "selectedClass"
          }`}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      {!noHeaderFooter && (
        <div className="navbar bg-[#002e33]/50 backdrop-blur-sm fixed z-50 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navbarOption}
              </ul>
            </div>
            <div>
              <img src={logo} alt="" className="w-28" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navbarOption}</ul>
          </div>
          <div className="navbar-end">
            {role === "student" && (
              <div className="indicator me-8">
                <span className="indicator-item rounded-full w-7 rounded-bl-none ml-10 text-xs p-[4px] text-center bg-[color:var(--secondaryColor)]">
                  {selectedClasses.length || 0}
                </span>
                <Link
                  to="/dashboard/selectedClass"
                  className="btn border-0 btn-sm text-2xl"
                >
                  {/*<SiGoogleclassroom />*/}
                  <img src={education} alt="" className="w-8 " />
                </Link>
              </div>
            )}
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                {user ? (
                  <>
                    <div>
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar border-0"
                      >
                        <div className="w-12 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content space-y-4 mt-2 p-3 bg-[#002e33]/50   rounded-b-lg w-52"
                      >
                        <li
                          onClick={handleLogOut}
                          className="btn bg-[color:var(--secondaryColor)] hover:bg-[color:var(--hoverColor1)] border-0"
                        >
                          <div>Logout</div>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <button className="btn bg-[color:var(--secondaryColor)] hover:bg-[color:var(--hoverColor1)] border-0">
                      <Link to="/login">Login</Link>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
