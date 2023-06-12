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
import UpdateClass from "../Pages/ForInstructor/UpdateClass/UpdateClass";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/ForStudents/Payment/Payment";
import PaymentHistory from "../Pages/ForStudents/Payment/PaymentHistory";

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
        element: (
          <StudentRoute>
            <SelectedClass />
          </StudentRoute>
        ),
      },
      {
        path: "enrolledClass",
        element: (
          <StudentRoute>
            <EnrolledClass />
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <Payment />
          </StudentRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <StudentRoute>
            <PaymentHistory />
          </StudentRoute>
        ),
      },
      //admin
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      //instructor
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <InstructorClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "updateClass",
        element: (
          <InstructorRoute>
            <UpdateClass />
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
