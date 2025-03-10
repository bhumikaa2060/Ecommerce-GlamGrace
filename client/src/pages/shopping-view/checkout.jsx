
import img from "../../assets/hunx.avif";

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);




    return (
        <div className="flex flex-col">
              <div className="relative h-[300px] w-full overflow-hidden">

              <img src={img} className="h-full w-full object-cover object-center" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">

                <Address/>

                <div className="flex flex-col gap-4">

                {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((item) => (
                <UserCartItemsContent cartItem={item} />
              ))
            : null}

                </div>


              </div>
              </div>
        </div>
      
    );
}
export default ShoppingCheckout;


