

import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";

import { Fragment, useState } from "react";

const initialFormData = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    salePrice: '',
    totalStock: ''
};

function AdminProducts() {
    const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");

    function onSubmit() {}

    return (
        <Fragment>
            {/* Header Section */}
            <div className="mb-6 w-full flex justify-end">
                <Button 
                    onClick={() => setOpenCreateProductsDialog(true)}
                    className="px-6 py-2 text-lg font-semibold bg-black text-white hover:bg-gray-800 transition-all"
                >
                    Add New Product
                </Button>
            </div>

            {/* Products Grid */}
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4"></div>

            {/* Add Product Sheet */}
            <Sheet open={openCreateProductsDialog} onOpenChange={() => setOpenCreateProductsDialog(false)}>
                <SheetContent slide="right" className="overflow-auto p-6">
                    <SheetHeader className="mb-4">
                        <SheetTitle className="text-xl font-semibold text-gray-900">
                            Add New Product
                        </SheetTitle>
                    </SheetHeader>

                    {/* Image Upload */}
                    <div className="mb-6">
                        <ProductImageUpload 
                            file={imageFile} 
                            setFile={setImageFile} 
                            uploadedImageUrl={uploadedImageUrl} 
                            setUploadedImageUrl={setUploadedImageUrl} 
                        />
                    </div>

                    {/* Form */}
                    <div className="py-4">
                        <CommonForm 
                            onSubmit={onSubmit} 
                            formData={formData} 
                            setFormData={setFormData} 
                            buttonText="Add"
                            formControls={addProductFormElements}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </Fragment>
    );
}

export default AdminProducts;





// import ProductImageUpload from "@/components/admin-view/image-upload";
// import CommonForm from "@/components/common/form";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
// import { addProductFormElements } from "@/config";

// import { Fragment, useState } from "react";

// const initialFormData = {
//   image: null,
//   title: '',
//   description: '',
//   category: '',
//   brand: '',
//   price: '',
//   salePrice: '',
//   totalStock: ''
// };

// function AdminProducts() {
//   const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
//   const [formData, setFormData] = useState(initialFormData);
//   const [imageFile, setImageFile] = useState(null); // Define state for image file
//   const [uploadedImageUrl, setUploadedImageUrl] = useState(""); // Define state for uploaded image URL

//   function onSubmit() {
//     const productData = {
//       ...formData,
//       image: uploadedImageUrl, // Use the uploaded Cloudinary URL
//     };
//     // Add logic to send productData to backend (e.g., axios.post('/api/products/add', productData))
//     console.log('Submitting product:', productData);
//     setFormData(initialFormData);
//     setImageFile(null); // Reset image file state
//     setUploadedImageUrl(""); // Reset uploaded image URL
//     setOpenCreateProductsDialog(false);
//   }

//   return (
//     <Fragment>
//       {/* Header Section */}
//       <div className="mb-6 w-full flex justify-end">
//         <Button 
//           onClick={() => setOpenCreateProductsDialog(true)}
//           className="px-6 py-2 text-lg font-semibold bg-black text-white hover:bg-gray-800 transition-all"
//         >
//           Add New Product
//         </Button>
//       </div>

//       {/* Products Grid */}
//       <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4"></div>

//       {/* Add Product Sheet */}
//       <Sheet open={openCreateProductsDialog} onOpenChange={() => setOpenCreateProductsDialog(false)}>
//         <SheetContent slide="right" className="overflow-auto p-6 max-w-[90%] w-[500px]">
//           <SheetHeader className="mb-4">
//             <SheetTitle className="text-xl font-semibold text-gray-900">
//               Add New Product
//             </SheetTitle>
//           </SheetHeader>

//           {/* Image Upload */}
//           <div className="mb-6">
//             <ProductImageUpload 
//               file={imageFile} 
//               setFile={setImageFile} // Pass setImageFile as setFile to match image-upload.jsx
//               uploadedImageUrl={uploadedImageUrl} 
//               setUploadedImageUrl={setUploadedImageUrl} 
//             />
//           </div>

//           {/* Form */}
//           <div className="py-4">
//             <CommonForm 
//               onSubmit={onSubmit} 
//               formData={formData} 
//               setFormData={setFormData} 
//               buttonText="Add"
//               formControls={addProductFormElements}
//             />
//           </div>
//         </SheetContent>
//       </Sheet>
//     </Fragment>
//   );
// }

// export default AdminProducts;










