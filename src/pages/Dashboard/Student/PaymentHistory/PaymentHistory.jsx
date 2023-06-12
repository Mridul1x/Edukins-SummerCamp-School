// import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import usePayment from "../../../../hooks/usePayment";
import moment from "moment/moment";

const PaymentHistory = () => {
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
      <div className="uppercase text-2xl mt-4 text-center font-semibold h-[60px]">
        <h1>Payment History</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="text-center bg text-white text-base">
            <tr>
              <th>#</th>
              <th>Student Email</th>
              <th>Transaction ID</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {paymentItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td>{moment(item.date).format("MMMM Do, YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
