import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import SocailLogin from "../Shared/SocialLogin/SocailLogin";
import useTitlte from "../../hooks/useTitle";

const Login = () => {
  useTitlte("Login");
  //   const [disabled, setDisabled] = useState(true);
  const { userSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const user = result.user;

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full border border-[#5436ec]  p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#5436ec] uppercase">
          Sign in
        </h1>
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              className=" block w-full px-4 py-2 mt-2 text-[#5436ec] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-[#5436ec] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-[#5436e hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 tracking-wide text-white transition-colors duration-200 transform bg-[#5436ec] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>
        <SocailLogin></SocailLogin>
        <p className="text-red-600">{error}</p>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account? Please
          <Link
            to="/register"
            className="ms-1 font-medium text-[#5436ec] hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
