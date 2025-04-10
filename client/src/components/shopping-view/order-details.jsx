import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

function ShoppingOrderDetailsView(){
  return(
    <DialogContent className="sm:max-w-[600px]">
  <div className=" grid gap-6">
    <div className="grid gap-2">
      <div className="flex mt-6 items-center justify-between">
        <p className="font-medium">Order ID</p>
        <Label>456789</Label>
      </div>

      <div className="flex mt-2 items-center justify-between">
        <p className="font-medium">Order Date</p>
        <Label>27/06/2025</Label>
      </div>

      <div className="flex mt-2 items-center justify-between">
        <p className="font-medium">Status</p>
        <Label>In Process</Label>
      </div>


      <div className="flex mt-2 items-center justify-between">
        <p className="font-medium">Price</p>
        <Label>Rs.207656 </Label>
      </div>

    </div>

    <Separator/>
<div className="grid gap-4">
  <div className="grid gap-2">
    <div className="font-medium">
      Order details
    </div>
    <ul className="grid gap-3">
      <li className="flex items-center justify-between">
        <span>Product One</span>
        <span>Rs. 207656</span>
      </li>
    </ul>

  </div>
</div>
  </div>



  <div className="grid gap-4">
  <div className="grid gap-2">
    <div className="font-medium">
   Shipping Info
    </div>
    <ul className="grid gap-3">
      <div className="grid gap-o.5 text-muted-foreground">
        <span>Alisha Bohara</span>
        <span>City</span>
        <span>Address</span>
        <span>Pincodes</span>
        <span>Phone</span>
        <span>Notes</span>

        </div>
      
    </ul>
    

  </div>
</div>



</DialogContent>
  )
}
export default ShoppingOrderDetailsView;