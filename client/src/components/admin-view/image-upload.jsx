
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





import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";

function ProductImageUpload({ imageFile, setImageFile, uploadedImageUrl, setUploadedImageUrl }) {
    const inputRef = useRef(null);

    // Handle file selection
    function handleImageFileChange(event) {
        console.log(event.target.files);
        const selectedFile = event.target.files?.[0];
        if (selectedFile) setImageFile(selectedFile);
    }

    // Handle drag over
    function handleDragOver(event) {
        event.preventDefault();
    }

    // Handle drop
    function handleDrop(event) {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files?.[0];
        if (droppedFile) setImageFile(droppedFile);
    }

    // Remove the uploaded image
    function handleRemoveImage() {
        setImageFile(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    // Function to upload the image to Cloudinary
    async function uploadImageToCloudinary() {
        const data = new FormData();
        data.append('my_file', imageFile);

        // Making a POST request to upload the image
        const response = await axios.post('http://localhost:5000/api/admin/products/upload-image', data);
        console.log(response, 'response');

        if (response.data?.success) {
            setUploadedImageUrl(response.data.result.secure_url); // Assuming secure_url is returned in the response
        }
    }

    // Trigger the image upload when the file changes
    useEffect(() => {
        if (imageFile !== null) uploadImageToCloudinary();
    }, [imageFile]);

    return (
        <div className="w-full max-w-md mx-auto mt-4">
            <label className="text-lg font-semibold mb-2 block">Upload Image</label>

            <div onDragOver={handleDragOver} onDrop={handleDrop} className="border-2 border-dashed rounded-lg p-4">
                <input
                    id="image-upload"
                    type="file"
                    className="hidden"
                    ref={inputRef}
                    onChange={handleImageFileChange}
                />
                {!imageFile ? (
                    <label htmlFor="image-upload" className="flex flex-col items-center justify-center cursor-pointer">
                        <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
                        <span>Drag and drop or click to upload image</span>
                    </label>
                ) : (
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FileIcon className="w-8 text-primary mr-2 h-8" />
                        </div>
                        <p className="text-sm font-medium">{imageFile.name}</p>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={handleRemoveImage}>
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
