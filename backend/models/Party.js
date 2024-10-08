const mongoose = require("mongoose");
const {Schema} = mongoose;

const {serviceSchema} = require("./Services");

const partySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    budget:{
        type:Number,
        required:true
    },
    services:{
        type:[serviceSchema],
    },
},{timestamps:true}
);

const Party = mongoose.model("Party",partySchema)
module.exports = Party;