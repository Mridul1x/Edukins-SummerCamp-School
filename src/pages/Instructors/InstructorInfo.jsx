import React from "react";
import "./InstructorInfo.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdPeopleAlt } from "react-icons/md";
import PageTitle from "../../components/PageTitle/PageTitle";
import useTitlte from "../../hooks/useTitle";
const InstructorInfo = () => {
  useTitlte("Instructor");
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], refetch } = useQuery(
    ["instructor"],
    async () => {
      const res = await axiosSecure.get("/instructor");

      return res.data;
    }
  );
  return (
    <div>
      <div className="bg2 pt-4 pb-8">
        <PageTitle
          heading={"Meet Our Instructors"}
          subHeading={"Learn about our exemplary educators and staff"}
        ></PageTitle>
      </div>

      <div className="mt-5 mx-5">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="card card-side card-compact card-bordered mb-5 mx-auto bg-base-100  shadow-xl"
          >
            <figure className="w-64">
              <img src={instructor.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
              <p>
                Classes Assigned:{" "}
                {instructor.classesTaken.map((classTaken, index) => (
                  <li key={index}>{classTaken}</li>
                ))}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorInfo;
