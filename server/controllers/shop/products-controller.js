
const Product = require('../../models/Product')

const getFilteredProducts = async(req,res)=>{
    try{

        const products = await Product.find({})

        res.status(200).json({
            sucess:true,
            data: products
        })
       
    }catch(e){
        console.log(error);
        res.status(500).json({
            sucess:false,
            message:'some error occured'

        })
    }
}


module.exports = {getFilteredProducts}