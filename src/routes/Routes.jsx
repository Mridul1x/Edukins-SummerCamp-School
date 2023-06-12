import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import InstructorInfo from "../pages/Instructors/InstructorInfo";
import ClassesInfo from "../pages/Classes/ClassesInfo";
import Dashboard from "../layout/Dashboard";
import Payment from "../pages/Payment/Payment";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/Instructor/AddAClass/MyClasses/MyClasses";
import FeedBack from "../pages/Dashboard/Admin/FeedBack/FeedBack";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/instructors",
        element: <InstructorInfo></InstructorInfo>,
      },
      {
        path: "/classes",
        element: <ClassesInfo></ClassesInfo>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          //student route
          {
            path: "selectedClasses",
            element: <MySelectedClasses></MySelectedClasses>,
          },
          {
            path: "manageClasses",
            element: <ManageClasses></ManageClasses>,
          },
          {
            path: "manageClasses/feedback/:id",
            element: <FeedBack></FeedBack>,
          },
          {
            path: "manageUsers",
            element: <ManageUsers></ManageUsers>,
          },

          //instructor route
          {
            path: "addAClass",
            element: <AddAClass></AddAClass>,
          },
          {
            path: "myClasses",
            element: <MyClasses></MyClasses>,
          },

          {
            path: "payment",
            element: <Payment></Payment>,
          },
        ],
      },
    ],
  },
]);
