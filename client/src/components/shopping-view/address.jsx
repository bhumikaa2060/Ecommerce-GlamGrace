


// import { useState } from "react";
// import CommonForm from "../common/form";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { addressFormControls } from "@/config";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewAddress, fetchAllAddresses } from "@/store/shop/address-slice";

// const initialAddressFormData = {
//     address: "",
//     city: "",
//     phone: "",
//     pincode: "",
//     notes: "",
// };

// function Address() {
//     const [formData, setFormData] = useState(initialAddressFormData); // Fixed useState destructuring
//     const dispatch = useDispatch();
//     const{user} = useSelector(state=>state.auth)
//     const{addressList} = useSelector(state=>state.shopAddress)


//     function handleManageAddress(event) {
//         event.preventDefault();
//          dispatch(addNewAddress({
//             ...formData,
//             userId : user?.id
//          })).then(data=>{
//             console.log(data);
//             if(data?.payload?.success){
//                 dispatch(fetchAllAddresses(user?.id))
//                 setFormData(initialAddressFormData)
//             }
//          })
//         // You may want to handle form submission here
//     }

//     function isFormValid(){
//         return Object.keys(formData).map(key=> formData[key].trim() !== '').every(item=> item);
//     }

//     console.log(addressList, '')   // Address List dekhauna baki

//     return (
//         <Card>
//             <div>Address List</div>

//             <CardHeader>
//                 <CardTitle>Add New Address</CardTitle>
//             </CardHeader>

//             <CardContent className="space-y-3">
//                 <CommonForm
//                     formControls={addressFormControls}
//                     formData={formData}
//                     setFormData={setFormData}
//                     buttonText={"Add"}
//                     onSubmit={handleManageAddress}
//                     isBtnDisabled={!isFormValid()}
//                 />
//             </CardContent>
//         </Card>
//     );
// }

// export default Address;






import { useState, useEffect } from "react";
import CommonForm from "../common/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { addressFormControls } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import { addNewAddress, fetchAllAddresses } from "@/store/shop/address-slice";
import AddressCard from "./address-card";

const initialAddressFormData = {
    address: "",
    city: "",
    phone: "",
    pincode: "",
    notes: "",
};

function Address() {
    const [formData, setFormData] = useState(initialAddressFormData);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { addressList } = useSelector(state => state.shopAddress);

    // Fetch addresses when component mounts
    useEffect(() => {
        if (user?.id) {
            dispatch(fetchAllAddresses(user.id));
        }
    }, [dispatch, user]);

    function handleManageAddress(event) {
        event.preventDefault();

        dispatch(addNewAddress({
            ...formData,
            userId: user?.id
        })).then(data => {
            console.log(data);
            if (data?.payload?.success) {
                dispatch(fetchAllAddresses(user?.id));
                setFormData(initialAddressFormData);
            }
        });
    }

    function isFormValid() {
        return Object.keys(formData).map(key => formData[key].trim() !== '').every(item => item);
    }

    return (
        <div className="space-y-6">
            {/* Display Address List */}
            <Card>
                <CardHeader>
                    <CardTitle>Address List</CardTitle>
                </CardHeader>
                <CardContent>
                    {addressList && addressList.length > 0 ? (
                        <div className="grid gap-4 md:grid-cols-2">
                            {addressList.map((address) => (
                                <AddressCard 
                                    key={address._id} 
                                    addressInfo={address} 
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No addresses found. Please add a new address.</p>
                    )}
                </CardContent>
            </Card>

            {/* Add New Address Form */}
            <Card>
                <CardHeader>
                    <CardTitle>Add New Address</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                    <CommonForm
                        formControls={addressFormControls}
                        formData={formData}
                        setFormData={setFormData}
                        buttonText={"Add"}
                        onSubmit={handleManageAddress}
                        isBtnDisabled={!isFormValid()}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

export default Address;








