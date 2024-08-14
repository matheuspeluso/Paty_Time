const mongoose = require("mongoose");

const {Schema} = mongoose;

const serviceSchema = new Schema({ //model skeleton
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    image:{
        type:String, // url image
    },
},
{timestamps:true}  // timestamps is used to save the register creation date and updated date
);

const Service = mongoose.model("Service",serviceSchema);

module.exports = {
    Service,
    serviceSchema
};
