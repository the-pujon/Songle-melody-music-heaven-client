import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineMenuUnfold,
  AiOutlineHome,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BsBuildingAdd } from "react-icons/bs";
import { BiSelectMultiple, BiHistory } from "react-icons/bi";

import useRole from "../Hooks/useRole";

const Dashboard = () => {
  const isAdmin = true;
  const isInstructor = false;

  const [role] = useRole();

  console.log(role);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden text-3xl"
          >
            <AiOutlineMenuUnfold />
          </label>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-64 h-full bg-[color:var(--secondaryColor)] text-white">
            <div className="text-2xl text-white  text-center bg-[var(--hoverColor1)] ">
              Songle Melody Music <br />
              <span>Heaven</span>
            </div>
            <div className="divider h-[.1rem] bg-black"></div>

            {/* Sidebar content here */}

            {role === "admin" ? (
              <>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>
                    <AiOutlineHome /> Admin Home
                  </Link>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <NavLink to="/dashboard/manageClasses">
                    Manage Classes
                  </NavLink>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <NavLink to="/dashboard/manageUsers">
                    <FaUsers /> Manage Users
                  </NavLink>
                </li>
              </>
            ) : role === "instructor" ? (
              <>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>
                    <AiOutlineHome /> Instructor Home
                  </Link>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <NavLink to="/dashboard/addClass">
                    <AiOutlineFileAdd /> Add Class
                  </NavLink>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <NavLink to="/dashboard/myClasses">My Classes</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>
                    <AiOutlineHome /> Student Home
                  </Link>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <NavLink to="/dashboard/selectedClass">
                    <BiSelectMultiple /> Selected Class
                  </NavLink>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <NavLink to="/dashboard/enrolledClass">
                    Enrolled Class
                  </NavLink>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>
                    <BiHistory /> Payment History
                  </Link>
                </li>
              </>
            )}

            <div className="divider h-[.1rem] bg-black"></div>
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
              <Link>logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
