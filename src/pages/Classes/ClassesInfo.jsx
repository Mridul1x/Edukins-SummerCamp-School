import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import photo1 from ".././../assets/hero-kid-1@2x-1024x670.png";
import photo2 from ".././../assets/title-a-place-to-learn.png";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdPeopleAlt } from "react-icons/md";

const ClassesInfo = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    console.log(res.data);
    return res.data;
  });
  return (
    <div>
      <div className="bg2 pt-4 pb-4">
        <PageTitle
          heading={"Let's Explore Our Photography Classes"}
          subHeading={
            "Every day at Right At School is a chance to learn, play and grow."
          }
        ></PageTitle>
      </div>
      <div className="flex bg2 justify-center items-center">
        <img className="w-5/12 lg:w-3/12" src={photo2} alt="" />
        <img className="w-5/12 lg:w-3/12 " src={photo1} alt="" />
      </div>

      <div className="grid gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8">
        {classes.slice(0, 6).map((classItem) => (
          <div
            key={classItem._id}
            className="card card-compact card-bordered w-4/5 mx-auto bg-base-100  shadow-xl"
          >
            <figure>
              <img src={classItem.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {classItem.name}
                <div className="badge badge-secondary">Join Now!</div>
              </h2>
              <p>Instructor Name: {classItem.instructor}</p>
              <div className="card-actions justify-between items-center">
                <div className="card-actions items-center">
                  <div className="badge badge-outline">
                    <MdPeopleAlt className="me-1"></MdPeopleAlt>
                    {classItem.availableSeats} Available Seats
                  </div>
                  <div className="text-lg font-semibold">
                    ${classItem.price}
                  </div>
                </div>
                <button onClick={''} className="btn text-white bg-[#5436ec] text-base rounded-full rounded-tr">
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesInfo;
