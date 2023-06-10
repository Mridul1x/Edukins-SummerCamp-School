import React from "react";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";
import img7 from "../../../assets/img7.jpg";
import img8 from "../../../assets/img8.jpg";
import "./Banner.css";
import { FaPlayCircle } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="mt-6 mb-12 lg:mt-10 banner mx-2 lg:mx-20">
      <div className="text-center">
        <h1 className="text-2xl lg:text-5xl font-bold ">
          Let's learn about new <br /> knowledge and languages.
        </h1>
        <p className="my-3 lg:my-5">
          Let's discover new knowledge and new friends and have a learning
          <br className="hidden lg:block" />
          experience with beautiful teachers
        </p>
        <div className="flex justify-center items-center">
          <button className="btn btn-primary rounded-3xl">Get Started</button>
          <button className="btn btn-ghost ms-2 rounded-3xl">
            <FaPlayCircle className="text-xl"></FaPlayCircle>
            Watch Videos
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3  lg:gap-6 mt-6">
        <div className="w-2/3  lg:w-3/12">
          <img className="rounded-full" src={img7} alt="" />
        </div>
        <div className="w-2/3 ms-auto lg:w-3/12 lg:mt-20">
          <img className="rounded-full" src={img6} alt="" />
        </div>
        <div className=" w-2/3 lg:w-3/12 lg:mt-20    ">
          <img className="rounded-full " src={img4} alt="" />
        </div>
        <div className=" w-2/3 ms-auto lg:w-3/12">
          <img className="rounded-full " src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
