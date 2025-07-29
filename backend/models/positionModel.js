const {model, default: mongoose} = require("mongoose");

const {positionSchema} = require("../schema/positionSchema.js");

const position = mongoose.model("position",positionSchema);

module.exports = {position};