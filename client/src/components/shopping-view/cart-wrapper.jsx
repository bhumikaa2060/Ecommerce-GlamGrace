// import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";


// function UserCartWrapper() {
//     return(
//         <SheetContent className="sm:max-w-md">
//             <SheetHeader>
//                 <SheetTitle>Your Cart</SheetTitle>
//             </SheetHeader>

//         </SheetContent>
//     )

// }


// export default UserCartWrapper;















import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

function UserCartWrapper() {
  return (
    <SheetContent className="sm:max-w-md bg-white p-4 rounded-lg shadow-md">
      <SheetHeader>
        <SheetTitle className="text-lg font-semibold text-gray-800">Your Cart</SheetTitle>
      </SheetHeader>

      <div className="mt-8 space-y-4">
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total </span>
          <span className="font-bold">$1000 </span>
        </div>
      </div>

      <Button className='w-full mt-6'>CheckOut</Button>
    </SheetContent>
  );
}

export default UserCartWrapper;