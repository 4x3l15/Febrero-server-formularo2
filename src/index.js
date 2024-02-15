const express = require("express");
const ejs = require("ejs");
const userRouter = require("./routes/user.js");
const mongoose = require("mongoose");

const app = express();
const port = 9500;

app.user('/api', userRouter);
app.set('view engine', 'ejs');
//routes
app.get("/buscar",(req,res) => {
 res.render("index.ejs");
});

//connection de mongodb
mongoose.connect("mongodb+srv://adramirez:axel__15@cluster0.xdwihik.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("connection con mongonDB exitosa"))
.catch((error) => console.log(error));

app.listen(port,() => console.log("el sever esta escuchando",port));