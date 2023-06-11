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
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  //   const { user } = useContext(AuthContext);
  //   const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  const isAdmin = false;
  const isInstructor = true;
  //   const [isAdmin] = useAdmin();
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
                  <NavLink to="/dashboard/adminhome">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItem">
                    <FaUtensils></FaUtensils> Add an Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClasses">
                    <FaWallet></FaWallet> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaBook></FaBook> Manage Bookings(not implemented)
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
                  <NavLink to="/dashboard/selectedClasses">
                    <FaHome></FaHome> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaCalendarAlt></FaCalendarAlt> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
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
