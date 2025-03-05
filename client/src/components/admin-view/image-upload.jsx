import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";

function ProductImageUpload({ imageFile, setFile, uploadedImageUrl, setUploadedImageUrl }) {
  const inputRef = useRef(null);

  // Handle file selection
  function handleImageFileChange(event) {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setFile(selectedFile); // Use setFile as passed from props (matching products.jsx)
  }

  // Handle drag over
  function handleDragOver(event) {
    event.preventDefault();
  }

  // Handle drop
  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setFile(droppedFile); // Use setFile as passed from props (matching products.jsx)
  }

  // Remove the uploaded image
  function handleRemoveImage() {
    setFile(null); // Use setFile as passed from props (matching products.jsx)
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  // Function to upload the image to Cloudinary
  async function uploadImageToCloudinary() {
    if (!imageFile || typeof imageFile !== 'object' || !imageFile.name) { // More specific check
      console.warn('No valid file selected for upload');
      return;
    }

    const data = new FormData();
    data.append('my_file', imageFile);

    try {
      const response = await axios.post('http://localhost:5000/api/products/upload-image', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response, 'response from /api/products/upload-image');

      if (response.data?.success) {
        setUploadedImageUrl(response.data.result.secure_url); // Assuming secure_url is returned in the response
      } else {
        throw new Error(response.data?.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Image upload error:', error.response?.data || error.message);
      if (error.response?.status === 404) {
        console.error('Endpoint /api/products/upload-image not found. Please verify the backend route exists.');
      } else if (error.response?.status === 500) {
        console.error('Server error for /api/products/upload-image:', error.response?.data?.error || error.message);
      }
      throw error; // Re-throw to handle in the component
    }
  }

  // Trigger the image upload when the file changes, with error handling
  useEffect(() => {
    if (imageFile && typeof imageFile === 'object' && imageFile.name) { // Only upload if a valid file exists
      uploadImageToCloudinary()
        .catch(error => {
          console.error('Upload failed in useEffect:', error.message);
          // Optionally notify the user or set an error state here
        });
    }
  }, [imageFile]);

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <label className="text-lg font-semibold mb-2 block">Upload Image</label>

      <div onDragOver={handleDragOver} onDrop={handleDrop} className="border-2 border-dashed rounded-lg p-4">
        <input
          id="image-upload"
          type="file"
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile || (typeof imageFile !== 'object' || !imageFile.name) ? (
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








