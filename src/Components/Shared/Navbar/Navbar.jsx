import React, { useContext } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

import "./Navbar.scss";

import useAuth from "../../../Hooks/useAuth";

//TODO: Website Logo
const Navbar = () => {
  const { user, loading } = useAuth();
  //console.log(user, loading);

  const pathName = useLocation().pathname;

  const noHeaderFooter = pathName === "/login" || pathName === "/register";

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
        <a>Dashboard</a>
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
            <a className="btn btn-ghost normal-case text-xl">
              Songle Melody Music Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navbarOption}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                {user ? (
                  <>
                    {" "}
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
                        <li className="btn bg-[color:var(--secondaryColor)] hover:bg-[color:var(--hoverColor1)] border-0">
                          <button>Logout</button>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="btn bg-[color:var(--secondaryColor)] hover:bg-[color:var(--hoverColor1)] border-0"
                    >
                      Login
                    </Link>
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
