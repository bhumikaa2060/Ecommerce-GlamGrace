// const { imageUploadUtils } = require("../../helpers/cloudinary");


// const handleImageUpload = async(req, res)=>{

//     try{

//         const b64 = Buffer.from(req.file.buffer).toString('base64')

//         const url = "data:" +req.file.minetype + ";base64," +b64;

//         const result = await imageUploadUtils(url)

//         res.json({
//             sucess : true,
//             result
//         })

//     }catch(error){
//         console.log(error);
//         res.json({
//             success: false,
//             message: "Error occurred",
//         })
//     }
// }


// module.exports ={handleImageUpload}



const { imageUploadUtils } = require("../../helpers/cloudinary");

const handleImageUpload = async(req, res) => {
    try {
        // Convert file buffer to base64 format for storage
        const b64 = Buffer.from(req.file.buffer).toString('base64');

        const url = "data:" + req.file.mimetype + ";base64," + b64;

        // Call imageUploadUtils to upload the file to Cloudinary
        const result = await imageUploadUtils(req.file);  // Passing the file directly instead of the URL

        res.json({
            success: true,
            result
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error occurred",
        });
    }
};

module.exports = { handleImageUpload };
