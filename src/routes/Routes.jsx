import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import InstructorInfo from "../pages/Instructors/InstructorInfo";
import ClassesInfo from "../pages/Classes/ClassesInfo";

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
    ],
  },
]);
