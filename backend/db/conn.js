const mongoose = require("mongoose");

async function main(){

    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://matheuspeluso17:SxSPVaIwmj9qbo09@cluster0.icurr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("conectado ao banco!")
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = main