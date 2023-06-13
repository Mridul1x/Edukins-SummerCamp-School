import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { GiTeacher } from "react-icons/gi";
import useTitlte from "../../../../hooks/useTitle";

const ManageUsers = () => {
  useTitlte("Manage Users");
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    user;
  };

  return (
    <div className="w-full text-center">
      {/* <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet> */}
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="text-center bg text-white text-base">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="">Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    disabled={user.role !== "Student"}
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-sm btn-ghost bg-blue-600  text-white"
                  >
                    <FaUserShield></FaUserShield> Admin
                  </button>
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user.role !== "Student"}
                    className="btn ms-2 btn-ghost btn-sm bg-orange-600  text-white"
                  >
                    <GiTeacher></GiTeacher> Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
