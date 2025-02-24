 

//  const  express = require('express')


//  const{handleImageUpload} = require('../../controllers/admin/products-controller')


//  const {upload} = require('../../helpers/cloudinary')



//  const router = express.Router();
//  router.post('/upload-image', upload.single('my_file'), handleImageUpload)


//  module.exports = router;


// const express = require('express');
// const { handleImageUpload } = require('../../controllers/admin/products-controller');
// const { upload } = require('../../helpers/cloudinary');

// const router = express.Router();

// // Define the route for image upload and apply the multer middleware for handling file upload
// router.post('/upload-image', upload.single('my_file'), handleImageUpload);

// module.exports = router;





const express = require("express");

const {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../../controllers/admin/products-controller");

const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addProduct);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", fetchAllProducts);

module.exports = router;
