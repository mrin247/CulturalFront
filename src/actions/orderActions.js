import axios from "../utils/axios";
import { orderConstants } from "./constants";

export const addOrder = (order) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: orderConstants.ADD_ORDER_REQUEST });
      res = await axios.post("/client/order/addorder", order);
      if (res.status === 201) {
        dispatch({
          type: orderConstants.ADD_ORDER_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        console.log(error);
        dispatch({
          type: orderConstants.ADD_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: orderConstants.ADD_ORDER_FAILURE,
        payload: { error },
      });
    }
  };
};
 let razorpayResponse;


export const addPaidOrder = (order) => {
  return async (dispatch) => {
    try {
      console.log(order);
      const res = await axios.post(
        `/client/order/createPaymentOrder/${order.totalAmount}`,order
      );
      console.log(res);
      if (res.status !== 200) {
        return;
      }

      const options = {
        key: "rzp_test_tHI8HRFAFNYymj", // Enter the Key ID generated from the Dashboard
        amount: res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Mrin",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          razorpayResponse = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          };
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: orderConstants.ADD_ORDER_FAILURE,
        payload: { error },
      });
    }
  };
};
