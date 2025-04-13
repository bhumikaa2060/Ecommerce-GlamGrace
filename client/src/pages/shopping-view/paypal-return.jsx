







import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { capturePayment } from "@/store/shop/order-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";




function PaypalReturnPage() {
    
 const dispatch =useDispatch();
 const location =useLocation();
 const params = new URLSearchParams(location.search);
const paymentID = params.get('paymentId');
const payerID = params.get('PayerID')


// useEffect(()=>{

    // if(payerID && payerID) {
    //     const OrderId = JSON.parse(sessionStorage.getItem('currentOrderId'))
    //      dispatch(capturePayment({paymentID, payerID, orderId}))

    // }





// },[paymentID,payerID,dispatch])


useEffect(() => {
    if (paymentID && payerID) {
      const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));

      dispatch(capturePayment({ paymentID, payerID, orderId })).then((data) => {
        if (data?.payload?.success) {
          sessionStorage.removeItem("currentOrderId");
          window.location.href = "/shop/payment-success";
        }
      });
    }
  }, [paymentID, payerID, dispatch]);








    return (
        <Card>
            <CardHeader>
                <CardTitle>Processing Payment... Please wait!</CardTitle>
            </CardHeader>
        </Card>
    );
}

export default PaypalReturnPage;





