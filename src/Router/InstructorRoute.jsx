import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";

const InstructorRoute = ({ children }) => {
  const { user, userLoading } = useAuth();
  const [role, roleLoading] = useRole();

  if (userLoading || roleLoading) {
    console.log("here");
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && role === "instructor") {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default InstructorRoute;
