import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdPeopleAlt } from "react-icons/md";
import "./Classes.css";
import LazyLoad from "react-lazy-load";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes?sort=totalEnrolledStudents");
    const approvedClasses = res.data.filter(
      (classItem) => classItem.status === "approved"
    );
    return approvedClasses;
  });
  return (
    <div className="mt-12 bg py-12">
      <h1 className="text-2xl lg:text-4xl font-bold text-center text-white">
        Choose the class that <br /> according to your need
      </h1>

      <div className="grid gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8">
        {classes.slice(0, 6).map((classItem) => (
          <div
            key={classItem._id}
            className="card card-compact card-bordered w-4/5 mx-auto bg-base-100  shadow-xl"
          >
            <figure style={{ height: "250px" }}>
              <LazyLoad threshold={0.99}>
                <img
                  src={classItem.image}
                  alt="Shoes"
                  className="w-full h-full object-cover"
                />
              </LazyLoad>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg">{classItem.name}</h2>
              <p>Instructor Name: {classItem.instructor}</p>
              <div className="card-actions justify-between items-center">
                <div className="badge badge-outline">
                  <MdPeopleAlt className="me-1"></MdPeopleAlt>
                  <span className="font-semibold me-1">
                    {classItem.availableSeats}
                  </span>
                  Available Seats
                </div>
                <div className="badge badge-outline">
                  <MdPeopleAlt className="me-1"></MdPeopleAlt>
                  <span className="font-semibold me-1">
                    {classItem.totalEnrolledStudents}
                  </span>
                  Students
                </div>
                <div className="text-lg font-semibold">${classItem.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
