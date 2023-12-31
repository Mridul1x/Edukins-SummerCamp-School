import React, { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const SocailLogin = () => {
  const { googleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleAuth().then((result) => {
      const loggedInUser = result.user;
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        role: "Student",
      };
      fetch(
        "https://b7a12-summer-camp-server-side-mridul1x-mridul1x.vercel.app/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        }
      )
        .then((res) => res.json())
        .then(() => {
          navigate("/");
        });
    });
  };

  return (
    <>
      <div className="relative flex items-center justify-center w-full border border-t">
        <div className="absolute px-5 bg-white">Or</div>
      </div>
      <div className="flex mt-4 gap-x-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default SocailLogin;
