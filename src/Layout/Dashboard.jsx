import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = false;
  const isInstructor = true;

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-80 h-full bg-[color:var(--secondaryColor)] text-white">
            <div className="text-2xl text-white  text-center bg-[var(--hoverColor1)] ">
              Songle Melody Music <br />
              <span>Heaven</span>
            </div>
            <div className="divider h-[.1rem] bg-black"></div>

            {/* Sidebar content here */}

            {isAdmin ? (
              <>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>Admin Home</Link>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>Manage Classes</Link>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>Manage Users</Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>Instructor Home</Link>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>Add Class</Link>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <Link>My Classes</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <NavLink to="/dashboard/selectedClass">Student Home</NavLink>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <NavLink to="/dashboard/selectedClass">
                    Selected Class
                  </NavLink>
                </li>
                <li className="hover:text-[color:var(--hoverColor2)]">
                  <NavLink to="/dashboard/enrolledClass">
                    Enrolled Class
                  </NavLink>
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
