import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from "../Pages/ForStudents/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/ForStudents/EnrolledClass/EnrolledClass";
import ManageUsers from "../Pages/ForAdmin/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Pages/ForInstructor/AddClass/AddClass";
import InstructorClasses from "../Pages/ForInstructor/instructorClasses/instructorClasses";
import ManageClasses from "../Pages/ForAdmin/ManageClasses/ManageClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "selectedClass",
        element: <SelectedClass />,
      },
      {
        path: "enrolledClass",
        element: <EnrolledClass />,
      },
      //admin
      {
        path: "manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "manageClasses",
        element: <ManageClasses />,
      },
      //instructor
      {
        path: "addClass",
        element: <AddClass />,
      },
      {
        path: "myClasses",
        element: <InstructorClasses />,
      },
    ],
  },
]);

export default router;
