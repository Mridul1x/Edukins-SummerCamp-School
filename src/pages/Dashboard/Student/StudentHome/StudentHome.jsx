import React, { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { NavLink } from "react-router-dom";
import useTitlte from "../../../../hooks/useTitle";

const StudentHome = () => {
  useTitlte("Student Home");
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-6">
        Welcome to Edukins Dashboard, {user.displayName}.
      </h2>
      <div className="text-white mt-12 w-1/2 mx-auto text-center bg p-10 rounded-3xl">
        <p>
          To see your desired things, you can select pages from the dashboard
          menu or you can click below buttons to go that page. Thank You!
        </p>

        <button className="mt-3">
          <NavLink to="/dashboard/selectedClasses">My Selected Classes</NavLink>
        </button>

        <button className="ms-2">
          <NavLink to="/">My Enrolled Classes</NavLink>
        </button>

        <button className="ms-2">
          <NavLink to="/">Payment History</NavLink>
        </button>
      </div>
    </div>
  );
};

export default StudentHome;
