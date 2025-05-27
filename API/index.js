// Date  27/5/2025

//mongodb+srv://tanveerislam:<db_password>@cluster0.fst6moa.mongodb.net/hello

// module scuffodling
const products = require("./data/Products")
const mongoose = require("mongoose") 
const express = require ("express");
const app = express(); 

const dotenv = require ("dotenv")
dotenv.config()
const PORT = process.env.PORT



// connect mgdb

mongoose.connect(process.env.MONGOOSEDB).then(()=>console.log("BD connected")).then((err)=>{
    err;
})







app.listen( 3000 , () => {
    console.log(`server is running in ${PORT}`);
})













// app.get("/api/products" , (req , res) => {
//     res.json(products);
// });
// app.get("/api/products/:id" ,(req ,res) => {

//     const product = products.find((product) => product.id == req.params.id)
//     res.json(product);
// })