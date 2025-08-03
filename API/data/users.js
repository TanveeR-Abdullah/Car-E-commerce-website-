 const bcrypt = require("bcryptjs")

const users = [
    {
        name:"admin",
        email: "tanveer.com",
        password : bcrypt.hashSync("12345678",10),
        isAdmin : true
    },
    
    {
        name : "user",
        email : "Abdullah.com",
        password : bcrypt.hashSync("12345678",10)

    }

] 

module.exports = users;