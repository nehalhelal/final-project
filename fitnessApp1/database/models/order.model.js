   
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      // its id from user tabel / delet or update
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    meal: [
      {
        mealId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Meal",
      },

        
      },
    ],
    day:{
      type:String,
      trim:true,

  },
    // address: { type: Object, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
