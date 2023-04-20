   
const mongoose = require("mongoose")
const cartSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    title: {
        type: String
    },
    meals: [
        {
        mealId: {
            type: String,
        },
       
        },
    ],
    day:{
        type:String,
        trim:true,
        lowercase: true,
       
    },
},{
    timestamps:true
})
const cartModel = mongoose.model("Cart", cartSchema)
module.exports = cartModel