// import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import usePayment from "../../../../hooks/usePayment";
import moment from "moment/moment";

const MyEnrolledClasses = () => {
  const [paymentItems, refetch] = usePayment();
  console.log(paymentItems);
  // how does reduce work!!!
  const total = paymentItems.reduce((sum, item) => item.price + sum, 0);

  let index = 0; // Counter variable

  return (
    <div className="mx-auto w-11/12">
      {/* <Helmet>
        <title>Bistro Boss | My paymentItems</title>
      </Helmet> */}
      <div className="uppercase text-2xl font-semibold mb-2 pt-4 text-center">
        <h1>My Enrolled Classes</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="text-center bg text-white text-base">
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Enrollment Date</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {paymentItems.map((payment, paymentIndex) =>
              payment.classItems.map((classItem, classIndex) => (
                <tr key={`${paymentIndex}-${classIndex}`}>
                  <td>{++index}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classItem.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{classItem.name}</td>
                  <td>{classItem.price}</td>
                  <td>{moment(classItem.date).format("MMMM Do, YYYY")}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
