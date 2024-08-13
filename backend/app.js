//importação do express
const express = require("express");
// importação modulo cors
const cors = require("cors");

const app = express()

app.use(cors())
app.use(express.json())

//DB connection
const conn = require("./db/conn");

conn();

app.listen(3000, function(){
    console.log("Servidor Online!!");
})
