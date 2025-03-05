







async function imageUploadUtils(file) {
    if (!file || !file.buffer) {
        throw new Error('No valid file provided for upload');
    }
    try {
        const base64String = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
        const result = await cloudinary.uploader.upload(base64String, {
            resource_type: "auto",
        });
        return result;
    } catch (error) {
        throw new Error(`Cloudinary upload failed: ${error.message}`);
    }
}
