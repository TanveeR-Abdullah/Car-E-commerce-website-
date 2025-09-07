
const mongoose = require("mongoose");
const user = require("./user");


const orderItmes = new mongoose.Schema({
    name :{ type : String , required : rue },
    qty  :{ type : String , required : true },
    image:{ type : String , required : true },
    price:{ type : String , required : true },  
    product :{
        type :mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true ,
    },
})

const orderSchema =  new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, require: true , ref : user },
    orderItmes : [orderItmes],
    shippingAddress:{
        address:{type: String , required : true },
        city : {type: String , required : true },
        postcode:{type: String , required : true },
        country:{type: String , required : true },
    },
    paymentMethod : {type :String , required:true ,default :"Nagod "} ,
    paymentResult: {
        id :{type:String },
        status:{type:String},
        update :{type: String},
        email_address:{type : String},
    },
    taxPrice:{
        type: number,
        required : true,
        default : 0.0,
    },
    shippingPrice:{
        type: number,
        required : true,
        default : 0.0,
    },
    TotalPrice:{
        type: number,
        required : true,
        default : 0.0,
    },
    isPaid:{
        type:Boolean,
        required : true,
        default : false
    },
    isDeliverd:{
        type: Boolean,
        required : true,
        default :false,
    },
    deliveredAt:{
        type:Date
    },

},

{timestamps:true}

);


module.exports =mongoose.model("order", orderSchema )