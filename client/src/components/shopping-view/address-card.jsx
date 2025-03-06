// import { Card, CardContent } from "../ui/card";
// import { Label } from "../ui/label";




// function Addrescard({addressInfo}){
//     return(
//        <Card>
//         <CardContent className="grid gap-4">
//            <Label>{addressInfo?.address}</Label>
//            <Label>{addressInfo?.city}</Label>
//            <Label>{addressInfo?.pincode}</Label>
//            <Label>{addressInfo?.phone}</Label>
//            <Label>{addressInfo?.note}</Label>
//         </CardContent>
//        </Card>
//     )
// }

// export default Addrescard;












import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";

function AddressCard({ addressInfo }) {
    return (
        <Card>
            <CardContent className="grid gap-4 p-4">
                <Label className="font-medium">{addressInfo?.address}</Label>
                <Label>{addressInfo?.city}</Label>
                <Label>PIN: {addressInfo?.pincode}</Label>
                <Label>Phone: {addressInfo?.phone}</Label>
                {addressInfo?.notes && <Label>Notes: {addressInfo?.notes}</Label>}
            </CardContent>
        </Card>
    );
}

export default AddressCard;