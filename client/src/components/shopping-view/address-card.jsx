import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";




function Addrescard({addressInfo}){
    return(
       <Card>
        <CardContent className="grid gap-4">
           <Label>{addressInfo?.address}</Label>
           <Label>{addressInfo?.city}</Label>
           <Label>{addressInfo?.pincode}</Label>
           <Label>{addressInfo?.phone}</Label>
           <Label>{addressInfo?.note}</Label>
        </CardContent>
       </Card>
    )
}

export default Addrescard;