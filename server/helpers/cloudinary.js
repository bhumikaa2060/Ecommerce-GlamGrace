// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');

// cloudinary.config({
//     cloud_name: 'ddvwenqwg',
//     api_key: '528867794569364',
//     api_secret: 'E5VBs7o9aOxCbITjM4gDxwH-NhM'
// });

// const storage = multer.memoryStorage();

// async function imageUploadUtils(file) {
//     const result = await cloudinary.uploader.upload(file.buffer, { // Changed 'file' to 'file.buffer' here
//         resource_type: 'auto'
//     });

//     return result;
// }

// const upload = multer({storage});

// module.exports = { upload, imageUploadUtils };



const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name: 'ddvwenqwg',
    api_key: '528867794569364',
    api_secret: 'E5VBs7o9aOxCbITjM4gDxwH-NhM'
});

const storage = multer.memoryStorage();

async function imageUploadUtils(file) {
    // Corrected file reference to use 'file.buffer' as multer stores the file in memory
    const result = await cloudinary.uploader.upload(file.buffer, {
        resource_type: 'auto'  // Automatically detects the file type
    });

    return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtils };

