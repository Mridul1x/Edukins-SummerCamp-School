import React, { useContext } from "react";
import logo from "../../../assets/mainLogo1.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import useTitlte from "../../../hooks/useTitle";

const NavBar = () => {
  useTitlte("Home");
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {isAdmin && (
        <li>
          <Link to="/dashboard/manageClasses">Dashboard</Link>
        </li>
      )}

      {isInstructor && (
        <li>
          <Link to="/dashboard/myClasses">Dashboard</Link>
        </li>
      )}
      {!isAdmin && !isInstructor && (
        <li>
          <Link to="/dashboard/studentHome">Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar  bg-[#5436ec] text-white font-semibold">
      <div className="navbar-start  lg:navbar-end">
        <div className="dropdown pb-3">
          <label tabIndex={0} className="btn  btn-ghost lg:hidden">
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
            className="menu menu-sm text-black dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="w-48 ms-2">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  items-center text-lg lg:mx-20 menu-horizontal">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end items-center lg:navbar-start">
        {user ? (
          <>
            <div
              data-tip={user.displayName}
              className="avatar mt-2 me-2 tooltip tooltip-bottom tooltip-warning"
            >
              <div className="w-11 rounded-full ring ring-red-800 ">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-md text-base rounded-full rounded-tr"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="login" className="btn text-base rounded-full rounded-tr">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
