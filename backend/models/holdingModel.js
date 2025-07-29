const {model, default: mongoose} = require("mongoose");

const {holdingSchema} = require("../schema/holdingSchema.js");

const holding = mongoose.model("holding",holdingSchema);

module.exports = {holding};