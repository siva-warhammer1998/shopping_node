const Joi = require('joi');
const mongoose = require('mongoose')
const Product = mongoose.model('products',new mongoose.Schema( 
    {
        name  : {
            type:String,
            required:true,
            minlength: 3
        },

        price : {
            type: Number,
            required: true,
            minlength:1
        },
        
        stockinhand : {
            type:Number,
            required:true,
            minlength:1
        }
    }
));
function validatecusto(products){
    const schema ={
        name: Joi.string().required(),
        price:Joi.number().required().min(1),
        stockinhand:Joi.number().required()
    }
     
    const rres =  Joi.validate(products,schema);
    console.log(rres);
    return rres;
}
module.exports.Product = Product;
module.exports.validatecusto = validatecusto;
