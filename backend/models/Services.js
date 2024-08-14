const mongoose = require("mongoose");

const {Schema} = mongoose;

const serviceSchema = new Schema({ //model skeleton
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    image:{
        type:String, // url image
        required: true
    },
},
{timestamps:true}  // timestamps is used to save the register creation date and updated date
);

const Service = mongoose.model("Service",serviceSchema);

module.exports = {
    Service,
    serviceSchema
};
