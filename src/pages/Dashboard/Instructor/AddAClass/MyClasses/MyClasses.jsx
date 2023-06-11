import { FaTrashAlt } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { refetch, data: selectedItems = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return (
    <div className="mx-auto w-11/12">
      {/* <Helmet>
        <title>Bistro Boss | My selectedItems</title>
      </Helmet> */}
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-2xl">Total Classes: {selectedItems.length}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Enrolled Student</th>
              <th>Status</th>
              <th>Feeback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {selectedItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.totalEnrolledStudents}</td>
                <td className="text-blue-600 font-semibold">{item.status}</td>
                <td className="font-medium">
                  {item.feedback == "" ? "N/A" : item.feedback}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-sm bg-red-600  text-white"
                  >
                    <MdUpdate className="text-xl"></MdUpdate> Update
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

export default MyClasses;
