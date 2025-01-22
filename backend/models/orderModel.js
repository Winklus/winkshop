import mongoose, { Types } from "mongoose";

const orderSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },

  orderItems: {
    
  }
});