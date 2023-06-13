import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import ReactModal from "react-modal";
import "./ManageClasses.css";
import { Link } from "react-router-dom";
import useTitlte from "../../../../hooks/useTitle";
ReactModal.setAppElement("#root");
const ManageClasses = () => {
  useTitlte("Manage Classes");
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes`);
      return res.data;
    },
  });

  const handleApprove = async (classId) => {
    try {
      await axiosSecure.patch(`/classes/${classId}/status`, {
        status: "approved",
      });
      refetch();
    } catch (error) {
      console.error("Approve Error:", error);
    }
  };
  const handleDeny = async (classId) => {
    try {
      await axiosSecure.patch(`/classes/${classId}/status`, {
        status: "denied",
      });
      refetch();
    } catch (error) {
      console.error("Deny Error:", error);
    }
  };

  return (
    <div className="mx-auto w-11/12">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-2xl">Total Classes: {classes.length}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-xs">
          <thead className="text-center bg text-white text-base">
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Isntructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-decagon w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.instructor}</td>
                <td>{item.email}</td>
                <td className="text-blue-600 font-semibold">
                  {item.availableSeats}
                </td>
                <td className="font-medium">{item.price}</td>
                <td>{item.status}</td>
                <td>
                  <div className="flex flex-col">
                    <button
                      className="btn btn-xs bg-green-600 text-white"
                      onClick={() => handleApprove(item._id)}
                      disabled={
                        item.status === "approved" || item.status === "denied"
                      }
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-xs bg-red-600 text-white"
                      onClick={() => handleDeny(item._id)}
                      disabled={
                        item.status === "approved" || item.status === "denied"
                      }
                    >
                      Deny
                    </button>
                    <Link to={`feedback/${item._id}`}>
                      <button className="btn btn-xs bg-blue-600 text-white">
                        Send Feedback
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
