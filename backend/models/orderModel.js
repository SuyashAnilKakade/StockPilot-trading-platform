const mongoose = require("mongoose");
const { orderSchema } = require("../schema/orderSchema.js");

const order = mongoose.model("order", orderSchema); 

module.exports = { order }; 