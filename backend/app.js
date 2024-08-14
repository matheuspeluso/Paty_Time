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

//Routes
const routes = require("./routes/router")

app.use('/api', routes);

app.listen(3000, function(){
    console.log("Servidor Online!!");
})
