import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { AuthContext } from "../../../../provider/AuthProvider";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    const savedClasses = {
      name: data.name,
      email: data.email,
      image: data.image,
      instructor: data.instructor,
      price: parseFloat(data.price),
      availableSeats: parseFloat(data.availableSeats),
      totalEnrolledStudents: 0,
      status: "Pending",
    };
    console.log(savedClasses);
    axiosSecure.post("/classes", savedClasses).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Class Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="">
      <div className="bg2 p-4">
        <PageTitle heading={"ADD A CLASS"}></PageTitle>
      </div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <label className="input-group">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter Coffee Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ms-8 w-1/2">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <label className="input-group">
              <input
                {...register("image", { required: true })}
                type="text"
                name="image"
                placeholder="Enter toy picture Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row-2 */}
        <div className="flex">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <label className="input-group">
              <input
                {...register("instructor", { required: true })}
                type="text"
                defaultValue={user?.displayName}
                placeholder="Instructor Name"
                name="instructor"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ms-8 w-1/2">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <label className="input-group">
              <input
                required
                {...register("email", { required: true })}
                type="text"
                defaultValue={user?.email}
                placeholder="Instructor Email"
                name="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row-3 */}
        <div className="flex">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Available seats</span>
            </label>
            <label className="input-group">
              <input
                required
                {...register("availableSeats", { required: true })}
                type="number"
                placeholder="Enter Seats Number"
                name="availableSeats"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ms-8 w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                {...register("price", { required: true })}
                type="number"
                name="price"
                placeholder="Enter price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-warning hover:bg-[#f1d997] text-base btn-block"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddAClass;
