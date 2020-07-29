const {Product , validatecusto } = require("../models/products");
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
router.get('/', async (req,res)=>{
    let result = await Product.find();
    res.send(result);
})
router.get('/:id',async(req,res)=>{
    let result = await Product.findById(req.params.id);
    if(!result) return console.log('id not found');
    res.send(result);
})
router.post('/',async(req,res)=>{
    const{error} = validatecusto(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const product = new Product({
        name: req.body.name,
        price:req.body.price,
        stockinhand:req.body.stockinhand
    })
    const result = await product.save()
    res.send(result)
})
router.put('/:id', async(req,res)=>{
    const {error} = validatecusto(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const result = await Product.findByIdAndUpdate(req.params.id,
        { name: req.body.name,
          price: req.body.price,
          stockinhand: req.body.stockinhand
        },{new:true});
    if(!result) return (console.log("customer with given id not found"));    
    res.send(result);
})

router.delete('/:id', async(req,res)=>{
    const {error} = validatecusto(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const result = await Customer.findByIdAndDelete(req.params.id);
    res.send(result);
}
)
module.exports=router