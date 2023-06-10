import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { updateUserProfile, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                // reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };
  const password = watch("password");
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full border border-[#5436ec]  p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#5436ec]">
          Please Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              className="block w-full px-4 py-2 mt-2 text-[#5436ec] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              name="email"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-[#5436ec] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 15,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-[#5436ec] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 15 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password,
              })}
              name="confirmPassword"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-[#5436ec] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {(errors.password?.type === "required" && (
              <p className="text-red-600">Confirmation password is required</p>
            )) ||
              (errors.confirmPassword && (
                <p className="text-red-600">Passwords do not match</p>
              ))}
            {/* {errors.confirmPassword && (
              <p className="text-red-600">Passwords do not match</p>
            )} */}
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Photo URL
            </label>
            <input
              {...register("photo", { required: true })}
              name="photo"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-[#5436ec] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.photo && (
              <span className="text-red-600">Photo URL is required</span>
            )}
          </div>
          <a href="#" className="text-xs text-[#5436ec] hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#5436ec] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Already have an account? Please
          <Link
            to="/login"
            className="ms-1 font-medium text-[#5436ec] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
