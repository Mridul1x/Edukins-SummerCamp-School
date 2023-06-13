import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  //   TODO:
  //   <h1>Welcome, {user.displayName}</h1>
  return (
    <>
      <div className="drawer drawer-mobile lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-[#235edf] bg2 text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/manageClasses">
                    <FaWallet></FaWallet> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/myClasses">
                    <FaCalendarAlt></FaCalendarAlt> My Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addAClass">
                    <FaHome></FaHome>Add A Class
                  </NavLink>
                </li>
              </>
            )}
            {!isAdmin && !isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/studentHome">
                    <FaHome></FaHome> Student Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/selectedClasses">
                    <FaHome></FaHome> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledClasses">
                    <FaCalendarAlt></FaCalendarAlt> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/menu"> Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">Order Food</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
{
  /* 
TODO: LATERON
<li>
  <NavLink to="/dashboard/mycart">
    <FaShoppingCart></FaShoppingCart> My Cart
    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
  </NavLink>
</li> */
}
