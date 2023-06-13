import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="">
      <div id="error-page" className="lg:w-2/5 mx-auto text-center">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_bhw1ul4g.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>

        <Link to="/">
          <button className="btn mb-96 lg:mb-20  bg-[#007cff] text-white">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
