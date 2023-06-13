import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import "./Instructor.css";
import {
  MdPeopleAlt,
} from "react-icons/md";

const Instructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], refetch } = useQuery(
    ["instructor"],
    async () => {
      const res = await axiosSecure.get("/instructor");
      return res.data;
    }
  );
  return (
    <div className="bg1 py-12">
      <h1 className="text-4xl font-bold text-center ">Our Instructors</h1>

      <div className="grid gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8">
        {instructors.slice(0, 6).map((instructor) => (
          <div
            key={instructor._id}
            className="card card-compact card-bordered w-4/5 mx-auto bg-base-100  shadow-xl"
          >
            <figure>
              <img src={instructor.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <div className="card-actions justify-between items-center">
                <div className="badge badge-outline">
                  <MdPeopleAlt className="me-1"></MdPeopleAlt>
                  {instructor.numberOfStudents} Students
                </div>
                <div className="badge badge-outline">
                  Classes Assigned: {instructor.numberOfClassesTaken}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
