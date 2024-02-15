const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 9500;



app.get("/",(req,res) => {
 res.send("bienvenido a mi API");
});

app.listen(port,() => console.log("el sever esta escuchando",port));