const mongoose = require("mongoose");
const mealSchema = mongoose.Schema(
  {
    userId: {
      // its id from user tabel / delet or update
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// mealSchema.pre("save", async function () {
//   if (this.mealType == "txt" && this.file)
//     throw new Error("file must be remove");
//   //   else if (this.mealType == "img" && this.file)
//   //     throw new Error("file must be remove");
//   else if (this.mealType != "txt" && this.content)
//     throw new Error("content must be remove");
// });

const mealModel = mongoose.model("Meal", mealSchema);
module.exports = mealModel;
