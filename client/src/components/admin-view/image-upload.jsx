
// import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
// import { useEffect, useRef } from "react";
// import { Button } from "../ui/button";
// import axios from "axios";

// function ProductImageUpload({ imageFile, setImageFile, uploadedImageUrl, setUploadedImageUrl }) { // Fixed typo
//     const inputRef = useRef(null);

//     function handleImageFileChange(event) {
//         console.log(event.target.files);
//         const selectedFile = event.target.files?.[0];
//         if (selectedFile) setImageFile(selectedFile);
//     }


//     function handleDragOver(event){
//         event.preventDefault()

//     }

//     function handledrop(event){
//         event.preventDefault()
//         const droppedFile = event.dataTransfer.files?.[0];
//         if(droppedFile) setImageFile(droppedFile)

//     }

//     function handleRemoveImage(){

//         setImageFile(null)
//         if(inputRef.current){
//             inputRef.current.value = "";
//         }
//     }


//     async function uploadImageToCloudinary() {
//         const data = new FormData();
//         data.append('my_file',imageFile)
//         const response = await axios.post('http://localhost:5000/api/admin/products/upload-image', data)
//         console.log(response, 'response')
//         if(response) setUploadedImageUrl(response.data)
        
//     }

//   useEffect(()=>{
//     if(imageFile !== null) uploadImageToCloudinary()
//   },[imageFile])




//     return (
//         <div className="w-full max-w-md mx-auto mt-4">
//             <label className="text-lg font-semibold mb-2 block">Upload Image</label>
            

//             <div onDragOver={handleDragOver} onDrop={handledrop} className="border-2 border-dashed rounded-lg p-4">
//                 <input 
//                     id="image-upload" 
//                     type="file" 
//                     className="hidden" 
//                     ref={inputRef} 
//                     onChange={handleImageFileChange} 
//                 />
//                 {
//                     !imageFile ?
//                     <label htmlFor="image-upload" className="flex flex-col items-center justify-center cursor-pointer"> {/* Fixed Label */}
//                         <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2"/>
//                         <span>Drag and drop or click to upload image</span>
//                     </label> : <div className="flex-item-centre justify-between">
//                         <div className="flex items-center">
//                           <FileIcon className="w-8 text-primary mr-2 h-8"/>
//                         </div>
//                         <p className="text-sm font-medium">{imageFile.name}</p>
//                         <Button variant="ghost" size="icon" className="text-muted-foreground hoover:text-foreground" onClick={handleRemoveImage}>
//                             <XIcon className="w-4 h-4"/>
//                             <span className="sr-only">Remove File</span>
//                         </Button>
//     </div>
                    
//                 }
//             </div>
//         </div>
//     );
// }

// export default ProductImageUpload;





// 

// import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
// import { useEffect, useRef } from "react";
// import { Button } from "../ui/button";
// import axios from "axios";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";

// function ProductImageUpload({ imageFile, setImageFile, uploadedImageUrl, setUploadedImageUrl }) {
//     const inputRef = useRef(null);

//     // Handle file selection
//     function handleImageFileChange(event) {
//         console.log(event.target.files);
//         const selectedFile = event.target.files?.[0];
//         if (selectedFile) setImageFile(selectedFile);
//     }

//     // Handle drag over
//     function handleDragOver(event) {
//         event.preventDefault();
//     }

//     // Handle drop
//     function handleDrop(event) {
//         event.preventDefault();
//         const droppedFile = event.dataTransfer.files?.[0];
//         if (droppedFile) setImageFile(droppedFile);
//     }

//     // Remove the uploaded image
//     function handleRemoveImage() {
//         setImageFile(null);
//         if (inputRef.current) {
//             inputRef.current.value = "";
//         }
//     }

//     // Function to upload the image to Cloudinary
//     async function uploadImageToCloudinary() {
//         const data = new FormData();
//         data.append('my_file', imageFile);

//         // Making a POST request to upload the image
//         const response = await axios.post('http://localhost:5000/api/admin/products/upload-image', data);
//         console.log(response, 'response');

//         if (response.data?.success) {
//             setUploadedImageUrl(response.data.result.secure_url); // Assuming secure_url is returned in the response
//         }
//     }

//     // Trigger the image upload when the file changes
//     useEffect(() => {
//         if (imageFile !== null) uploadImageToCloudinary();
//     }, [imageFile]);

//     return (
//         <div className="w-full max-w-md mx-auto mt-4">
//             <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>

//             <div onDragOver={handleDragOver} onDrop={handleDrop} className="border-2 border-dashed rounded-lg p-4">
//                 <Input
//                     id="image-upload"
//                     type="file"
//                     className="hidden"
//                     ref={inputRef}
//                     onChange={handleImageFileChange}
//                 />
//                 {!imageFile ? (
//                     <Label htmlFor="image-upload" className="flex flex-col items-center justify-center cursor-pointer">
//                         <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
//                         <span>Drag and drop or click to upload image</span>
//                     </Label>
//                 ) : (
//                     <div className="flex justify-between items-center">
//                         <div className="flex items-center">
//                             <FileIcon className="w-8 text-primary mr-2 h-8" />
//                         </div>
//                         <p className="text-sm font-medium">{imageFile.name}</p>
//                         <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={handleRemoveImage}>
//                             <XIcon className="w-4 h-4" />
//                             <span className="sr-only">Remove File</span>
//                         </Button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default ProductImageUpload;









// import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { Button } from "../ui/button";
// import axios from "axios";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";

// function ProductImageUpload({ imageFile, setImageFile, imageLoadingState, uploadedImageUrl,
//   setUploadedImageUrl,setImageLoadingState}) {
  
//   const inputRef = useRef(null);

//   // Handle file selection
//   function handleImageFileChange(event) {
//     console.log(event.target.files);
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile) setImageFile(selectedFile);
//   }

//   // Handle drag over
//   function handleDragOver(event) {
//     event.preventDefault();
//   }

//   // Handle drop
//   function handleDrop(event) {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files?.[0];
//     if (droppedFile) setImageFile(droppedFile);
//   }

//   // Remove the uploaded image
//   function handleRemoveImage() {
//     setImageFile(null);
//     setUploadedImageUrl(null); // Reset the uploaded image URL
//     if (inputRef.current) {
//       inputRef.current.value = "";
//     }
//   }

//   // Function to upload the image to Cloudinary
//   // async function uploadImageToCloudinary() {
//   //   const data = new FormData();
//   //   data.append('my_file', imageFile); 
//   //   // data.append('my_file', imageFile); 
//   //   if (imageFile) {
//   //       console.log('File to upload:', imageFile);
//   //       // Continue with uploading
//   //     } else {
//   //       console.log('No file selected');
//   //     }

//   //   try {
//   //     const response = await axios.post('http://localhost:5000/api/admin/products/upload-image', data );
//   //     console.log(response, 'response');

//   //     if (response.data?.success) {
//   //       setUploadedImageUrl(response.data.result.secure_url); // Assuming secure_url is returned in the response
//   //     } else {
//   //       console.error('Upload failed:', response.data.message); // Log error message
//   //     }
//   //   } catch (error) {
//   //     console.error('Error uploading image:', error); // Log the error details
//   //   }
//   // }
//   async function uploadImageToCloudinary() {
//     setImageLoadingState(true);
//     const data = new FormData();
//     data.append("my_file", imageFile);
//     const response = await axios.post(
//       "http://localhost:5000/api/admin/products/upload-image",
//       data
//     );
//     console.log(response, "response");

//     if (response?.data?.success) {
//       setUploadedImageUrl(response.data.result.url);
//       setImageLoadingState(false);
//     }
//   }





//   // Trigger the image upload when the file changes
//   useEffect(() => {
//     if (imageFile !== null) uploadImageToCloudinary();
//   }, [imageFile]);

//   return (
//     <div className="w-full max-w-md mx-auto mt-4">
//       <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>

//       <div onDragOver={handleDragOver} onDrop={handleDrop} className="border-2 border-dashed rounded-lg p-4">
//         <Input
//           id="image-upload"
//           type="file"
//           className="hidden"
//           ref={inputRef}
//           onChange={handleImageFileChange}
//         />
//         {!imageFile ? (
//           <Label htmlFor="image-upload" className="flex flex-col items-center justify-center cursor-pointer">
//             <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
//             <span>Drag and drop or click to upload image</span>
//           </Label>
//         ) : (
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <FileIcon className="w-8 text-primary mr-2 h-8" />
//             </div>
//             <p className="text-sm font-medium">{imageFile.name}</p>
//             <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={handleRemoveImage}>
//               <XIcon className="w-4 h-4" />
//               <span className="sr-only">Remove File</span>
//             </Button>
//           </div>
//         )}
//       </div>

//       {uploadedImageUrl && (
//         <div className="mt-4">
//           <Label className="text-lg font-semibold mb-2 block">Uploaded Image:</Label>
//           <img src={uploadedImageUrl} alt="Uploaded" className="w-full max-w-md mx-auto" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductImageUpload;





import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

function ProductImageUpload({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  console.log(isEditMode, "isEditMode");

  function handleImageFileChange(event) {
    console.log(event.target.files, "event.target.files");
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    // Change 'my_file' to match the backend expectation
    data.append("my_file", imageFile);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/products/upload-image",
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log(response, "response");
  
      if (response?.data?.success) {
        setUploadedImageUrl(response.data.result.url);
        setImageLoadingState(false);
      }
    } catch (error) {
      console.error("Upload error:", error);
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div
      className={`w-full  mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}
    >
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`${
          isEditMode ? "opacity-60" : ""
        } border-2 border-dashed rounded-lg p-4`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className={`${
              isEditMode ? "cursor-not-allowed" : ""
            } flex flex-col items-center justify-center h-32 cursor-pointer`}
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : imageLoadingState ? (
          <Skeleton className="h-10 bg-gray-100" />
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 text-primary mr-2 h-8" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;