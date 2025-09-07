
// dependancyes
// date 1/6/2025
// Abdullah Amin

const router =require("express").Router();
const user = require("./models/user") 
const users = require ("./data/users")
const Product = require("./models/products")
const Products = require ("./data/Products")
const asyncHandler = require ("express");



    router.post("/users", asyncHandler(
        async(req,res)=>{
            await user.deleteMany({});
            const UserSeeder = await user.insertMany(users);
            res.send({UserSeeder}) 
        })
        
    );



router.post("/products", asyncHandler( 
    async(req,res)=>{
        await user.deleteMany({});
        const UserSeeder = await Product.insertMany(Products)
        res.send({UserSeeder})
    }
)
);





module.exports =router;



