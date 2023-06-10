import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <div className="flex-shrink-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
