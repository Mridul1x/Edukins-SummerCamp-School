import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import InstructorInfo from "../pages/Instructors/InstructorInfo";
import ClassesInfo from "../pages/Classes/ClassesInfo";

import Payment from "../pages/Payment/Payment";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/Instructor/AddAClass/MyClasses/MyClasses";
import FeedBack from "../pages/Dashboard/Admin/FeedBack/FeedBack";
import StudentHome from "../pages/Dashboard/Student/StudentHome/StudentHome";
import MyEnrolledClasses from "../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Dashboard from "../layout/Dashboard";

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
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          //student route
          {
            path: "selectedClasses",
            element: <MySelectedClasses></MySelectedClasses>,
          },
          {
            path: "studentHome",
            element: <StudentHome></StudentHome>,
          },
          {
            path: "enrolledClasses",
            element: <MyEnrolledClasses></MyEnrolledClasses>,
          },
          {
            path: "paymentHistory",
            element: <PaymentHistory></PaymentHistory>,
          },

          {
            path: "payment",
            element: <Payment></Payment>,
          },
          //   -------------------
          // admin route
          //   --------------------
          {
            path: "manageClasses",
            element: (
              <AdminRoute>
                <ManageClasses></ManageClasses>
              </AdminRoute>
            ),
          },
          {
            path: "manageClasses/feedback/:id",
            element: (
              <AdminRoute>
                <FeedBack></FeedBack>
              </AdminRoute>
            ),
          },
          {
            path: "manageUsers",
            element: (
              <AdminRoute>
                <ManageUsers></ManageUsers>
              </AdminRoute>
            ),
          },

          //instructor route
          {
            path: "addAClass",
            element: (
              <InstructorRoute>
                <AddAClass></AddAClass>
              </InstructorRoute>
            ),
          },
          {
            path: "myClasses",
            element: (
              <InstructorRoute>
                <MyClasses></MyClasses>
              </InstructorRoute>
            ),
          },
        ],
      },
    ],
  },
]);
