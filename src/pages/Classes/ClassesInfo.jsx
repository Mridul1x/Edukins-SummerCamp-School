import React, { useContext } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import photo1 from ".././../assets/hero-kid-1@2x-1024x670.png";
import photo2 from ".././../assets/title-a-place-to-learn.png";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdPeopleAlt } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useSelectedItems from "../../hooks/useSelectedItems";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useTitlte from "../../hooks/useTitle";

const ClassesInfo = () => {
  useTitlte("Classes");
  const { user } = useContext(AuthContext);
  const [, refetch] = useSelectedItems();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const from = location.state?.from?.pathname;

  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    const approvedClasses = res.data.filter(
      (classItem) => classItem.status === "approved"
    );
    return approvedClasses;
  });

  const handleSelectButton = (classItem) => {
    if (user && user.email) {
      const selectItem = {
        classItemId: classItem._id,
        name: classItem.name,
        image: classItem.image,
        price: classItem.price,
        email: user.email,
      };

      fetch("http://localhost:5000/selectedItems", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(from, { replace: true });
        }
      });
    }
  };
  return (
    <div className="mb-4">
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
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={`card card-compact card-bordered w-4/5 mx-auto bg-base-100 shadow-xl ${
              classItem.availableSeats === 0 ? "bg-red-500" : ""
            }`}
          >
            <figure style={{ height: "250px" }}>
              <img
                src={classItem.image}
                alt="Shoes"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg">
                {classItem.name}
                {classItem.availableSeats === 0 ? (
                  <div className="badge badge-danger">Seats Full</div>
                ) : (
                  <div className="badge badge-secondary">Join!</div>
                )}
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
                <button
                  onClick={() => handleSelectButton(classItem)}
                  disabled={
                    classItem.availableSeats === 0 || isAdmin || isInstructor
                  }
                  className={`btn text-white ${
                    classItem.availableSeats === 0
                      ? "bg-gray-400"
                      : "bg-[#5436ec]"
                  } text-base rounded-full rounded-tr`}
                >
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
