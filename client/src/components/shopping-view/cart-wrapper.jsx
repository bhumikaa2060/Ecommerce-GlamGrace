// import { Button } from "../ui/button";
// import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
// import UserCartItemsContent from "./cart-items-content";

// function UserCartWrapper({ cartItems, setOpenCartSheet }) {
//   const navigate = useNavigate();

//   const items = cartItems && Array.isArray(cartItems) ? cartItems : [];
  
//   const totalCartAmount = items.length > 0
//     ? items.reduce(
//         (sum, currentItem) =>
//           sum +
//           (currentItem?.salePrice > 0
//             ? currentItem?.salePrice
//             : currentItem?.price) *
//             currentItem?.quantity,
//         0
//       )
//     : 0;
    
//   return (
//     <SheetContent className="sm:max-w-md bg-white p-4 rounded-lg shadow-md">
//       <SheetHeader>
//         <SheetTitle className="text-lg font-semibold text-gray-800">Your Cart</SheetTitle>
//       </SheetHeader>
      
//       <div className="mt-8 space-y-4">
//         {items && items.length > 0
//           ? items.map((item) => <UserCartItemsContent key={item.productId} cartItem={item} />)
//           : <p>Your cart is empty</p>}
//       </div>
      
//       <div className="mt-8 space-y-4">
//         <div className="flex justify-between">
//           <span className="font-bold">Total </span>
//           <span className="font-bold">Rs {totalCartAmount.toFixed(2)}</span>
//         </div>
//       </div>
      
//        <Button
//         onClick={() => {
//           navigate("/shop/checkout");
//           setOpenCartSheet(false);
//         }}
//         className="w-full mt-6"
//       >
//         Checkout
//       </Button>
//     </SheetContent>
//   );
// }

// export default UserCartWrapper;









import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

function UserCartWrapper({ cartItems, setOpenCartSheet }) {
  const navigate = useNavigate();

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  return (
    <SheetContent className="sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4">
        {cartItems && cartItems.length > 0
          ? cartItems.map((item) => <UserCartItemsContent cartItem={item} />)
          : null}
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">${totalCartAmount}</span>
        </div>
      </div>
      <Button
        onClick={() => {
          navigate("/shop/checkout");
          setOpenCartSheet(false);
        }}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </SheetContent>
  );
}

export default UserCartWrapper;