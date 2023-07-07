import React from "react";
import LazyLoad from "react-lazy-load";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";
import img7 from "../../../assets/img7.jpg";
import "./Banner.css";
import "animate.css";
import { Fade } from "react-awesome-reveal";
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  //banner section
  return (
    <div className="mt-6  lg:mt-10 banner mx-2 lg:mx-20 ">
      <div className="text-center">
        <h1 className="text-2xl lg:text-5xl font-bold animate__animated animate__backInDown animate__slow font">
          Let's learn about new <br /> knowledge and photography.
        </h1>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p className="my-3 lg:my-5">
            Let's discover new knowledge and new friends and have a learning
            <br className="hidden lg:block" />
            experience with beautiful teachers
          </p>
        </Fade>
        <div className="flex justify-center items-center">
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <button className="btn btn-primary rounded-3xl">Get Started</button>
          </motion.div>
          <button className="btn btn-ghost ms-2 rounded-3xl">
            <FaPlayCircle className="text-xl"></FaPlayCircle>
            Watch Videos
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3  lg:gap-6 mt-6">
        <div className="w-2/3 lg:w-3/12">
          <LazyLoad threshold={0.99}>
            <img className="rounded-full" src={img7} alt="Children" />
          </LazyLoad>
        </div>
        <div className="w-2/3 ms-auto lg:w-3/12 lg:mt-20">
          <LazyLoad threshold={0.99}>
            <img className="rounded-full" src={img6} alt="Children" />
          </LazyLoad>
        </div>
        <div className=" w-2/3 lg:w-3/12 lg:mt-20    ">
          <LazyLoad threshold={0.99}>
            <img className="rounded-full " src={img4} alt="Children" />
          </LazyLoad>
        </div>
        <div className=" w-2/3 ms-auto lg:w-3/12">
          <LazyLoad threshold={0.99}>
            <img className="rounded-full " src={img5} alt="Children" />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default Banner;
