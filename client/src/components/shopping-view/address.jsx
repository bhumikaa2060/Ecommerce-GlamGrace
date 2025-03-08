








// import { useState, useEffect } from "react";
// import CommonForm from "../common/form";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { addressFormControls } from "@/config";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewAddress, fetchAllAddresses } from "@/store/shop/address-slice";
// import AddressCard from "./address-card";

// const initialAddressFormData = {
//     address: "",
//     city: "",
//     phone: "",
//     pincode: "",
//     notes: "",
// };

// function Address() {
//     const [formData, setFormData] = useState(initialAddressFormData);
//     const dispatch = useDispatch();
//     const { user } = useSelector(state => state.auth);
//     const { addressList } = useSelector(state => state.shopAddress);

//     // Fetch addresses when component mounts
//     useEffect(() => {
//         if (user?.id) {
//             dispatch(fetchAllAddresses(user.id));
//         }
//     }, [dispatch, user]);

//     function handleManageAddress(event) {
//         event.preventDefault();

//         // Validate and format data
//         const validatedFormData = {
//             ...formData,
//             userId: user?.id,
//             pincode: formData.pincode.trim().length === 5 ? formData.pincode.trim() : "", // Ensure 5-digit pincode
//             phone: formData.phone.replace(/\D/g, '').length === 10 ? `+1${formData.phone.replace(/\D/g, '')}` : "", // Format phone with +1 country code
//         };

//         if (!validatedFormData.userId) {
//             console.error("User ID is missing");
//             return;
//         }

//         if (!Object.values(validatedFormData).every(value => value.trim() !== '')) {
//             console.error("All fields are required and cannot be empty");
//             return;
//         }

//         dispatch(addNewAddress(validatedFormData)).then(data => {
//             console.log(data);
//             if (data?.payload?.success) {
//                 dispatch(fetchAllAddresses(user?.id));
//                 setFormData(initialAddressFormData);
//             }
//         });
//     }

//     function isFormValid() {
//         return Object.keys(formData).map(key => formData[key].trim() !== '').every(item => item);
//     }

//     return (
//         <div className="space-y-6">
//             {/* Display Address List */}
//             <Card>
//                 <CardHeader>
//                     <CardTitle>Address List</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     {addressList && addressList.length > 0 ? (
//                         <div className="grid gap-4 md:grid-cols-2">
//                             {addressList.map((address) => (
//                                 <AddressCard 
//                                     key={address._id} 
//                                     addressInfo={address} 
//                                 />
//                             ))}
//                         </div>
//                     ) : (
//                         <p>No addresses found. Please add a new address.</p>
//                     )}
//                 </CardContent>
//             </Card>

//             {/* Add New Address Form */}
//             <Card>
//                 <CardHeader>
//                     <CardTitle>Add New Address</CardTitle>
//                 </CardHeader>

//                 <CardContent className="space-y-3">
//                     <CommonForm
//                         formControls={addressFormControls}
//                         formData={formData}
//                         setFormData={setFormData}
//                         buttonText={"Add"}
//                         onSubmit={handleManageAddress}
//                         isBtnDisabled={!isFormValid()}
//                     />
//                 </CardContent>
//             </Card>
//         </div>
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

    useEffect(() => {
        console.log("User ID:", user?.id);
        if (user?.id) {
            dispatch(fetchAllAddresses(user.id));
        } else {
            console.warn("User not logged in, skipping fetchAllAddresses");
        }
    }, [dispatch, user]);

    function handleManageAddress(event) {
        event.preventDefault();
        console.log("Form submission triggered with formData:", formData);
        console.log("User ID:", user?.id);

        if (!user?.id) {
            console.error("User ID is missing, cannot submit");
            return;
        }

        const validatedFormData = {
            ...formData,
            userId: user?.id,
            pincode: formData.pincode.trim().length === 5 ? formData.pincode.trim() : "",
            phone: formData.phone.replace(/\D/g, '').length === 10 ? `+1${formData.phone.replace(/\D/g, '')}` : "",
        };

        console.log("Validated Data:", validatedFormData);

        if (!Object.values(validatedFormData).every(value => value.trim() !== '')) {
            console.error("All fields are required and cannot be empty:", validatedFormData);
            return;
        }

        console.log("Dispatching addNewAddress with:", validatedFormData);
        dispatch(addNewAddress(validatedFormData)).then(data => {
            console.log("Dispatch response:", data);
            if (data?.payload?.success) {
                dispatch(fetchAllAddresses(user?.id));
                setFormData(initialAddressFormData);
            }
        }).catch(error => {
            console.error("Dispatch failed:", error);
        });
    }

    function isFormValid() {
        return Object.keys(formData).map(key => formData[key].trim() !== '').every(item => item);
    }

    return (
        <div className="space-y-6">
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