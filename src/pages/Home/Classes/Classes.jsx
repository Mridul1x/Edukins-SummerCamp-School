import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  MdPeopleOutline,
  MdPeopleAlt,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import "./Classes.css";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });
  return (
    <div className="mt-12 bg py-12">
      <h1 className="text-4xl font-bold text-center text-white">
        Choose the class that <br /> according to your need
      </h1>

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
                <div className="badge badge-outline">
                  <MdPeopleAlt className="me-1"></MdPeopleAlt>
                  {classItem.availableSeats} Students
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
