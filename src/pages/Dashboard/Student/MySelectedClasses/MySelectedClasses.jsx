import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useSelectedItems from "../../../../hooks/useSelectedItems";
import { useState } from "react";
import useTitlte from "../../../../hooks/useTitle";

const MySelectedClasses = () => {
  useTitlte("My Selected Classes");
  const [selectedItems, refetch] = useSelectedItems();

  const total = selectedItems.reduce((sum, item) => item.price + sum, 0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedItems/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handlePay = () => {
    if (selectedItems.length === 0) {
      setShowErrorMessage(true); // Show the error message
    } else {
      setShowErrorMessage(false); // Hide the error message
      // Navigate to the payment route
    }
  };

  return (
    <div className="mx-auto w-11/12">
      <div className="uppercase text-2xl font-semibold pt-4 text-center">
        <h1>My Selected Classes</h1>
      </div>
      <div className=" font-semibold flex items-center  mt-2 justify-between">
        <h3 className="text-lg">Total Items: {selectedItems.length}</h3>
        <h3 className="text-lg">Total Price: ${total}</h3>

        <Link to={total !== 0 ? "/dashboard/payment" : "#"}>
          {/* TODO disabled={total == 0} */}
          <div onClick={handlePay} className="btn btn-sm btn-success">
            PAY
          </div>
        </Link>
      </div>
      {showErrorMessage && (
        <p className="text-red-500 text-end">
          Please select items for payment.
        </p>
      )}
      <div className="overflow-x-auto w-full mt-2">
        <table className="table w-full">
          {/* head */}
          <thead className="bg text-white text-base">
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
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

export default MySelectedClasses;
