
// dependancyes
// date 1/6/2025
// Abdullah Amin

const router =require("express").Router();
const user = require("./models/user") 
const users = require ("./data/users")

router.post("/users", async(req,res)=>{

await user.deleteMany({});
const UserSeeder = await user.insertMany(users)
res.send({UserSeeder})

});




module.exports =router;



