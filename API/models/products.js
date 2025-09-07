const mongoose = require("mongoose");

// const reviewSchema = mongoose.Schema({
//     name : { type: String , require:true },
//     rating : {type : number, require: true },
//     comments : {type : srting , require: true},
//     user : {type : mongoose.Schema.Types.ObjectId, require: true , ref : user },
// });


const productSchema = mongoose.Schema(
    {
        name : { type: String , require:true },
        Image : {type: String , require:true},
        description : {type: String , require:true},
        rating : {type: Number , require:true, default: 0 },
        numReview: {type: Number , require:true, default: 0},
        price : {type: Number , require:true, default: 0},
        countInstock : {type: Number, require:true, default: 0},



        // review : [reviewSchema],

    }
)

module.exports =mongoose.model("products", productSchema)