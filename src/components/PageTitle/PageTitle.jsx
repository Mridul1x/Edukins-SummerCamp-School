import React from "react";

const PageTitle = ({ heading, subHeading }) => {
  return (
    <>
      <h1 className="text-4xl mb-2 font-bold text-center text-white">
        {heading}
      </h1>
      <p className="text-center text-white text-2xl font-semibold">
        {subHeading}
      </p>
    </>
  );
};

export default PageTitle;
