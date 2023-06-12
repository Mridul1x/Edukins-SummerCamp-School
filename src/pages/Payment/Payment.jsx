import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedItems from "../../hooks/useSelectedItems";
import PageTitle from "../../components/PageTitle/PageTitle";
import CheckoutForm from "./CheckoutForm";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    const { user } = useContext(AuthContext);
  const [selectedItems] = useSelectedItems();
  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <div className="bg2 p-4">
        <PageTitle heading={"Payment"}></PageTitle>
      </div>
      <div className="w-full flex flex-col mt-12">
        <h2 className="text-xl ms-8">Payment for, <span className="font-bold text-blue-600">{user.displayName}</span>.</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            selectedItems={selectedItems}
            price={price}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
