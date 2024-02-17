const express = require("express");
const bodyParser = require("body-parser");

const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

const userRouter = require("./routes/userRoutes.js");
const port = 9500;

app.use(bodyParser.json());
app.use(express.json());
app.use('/api', userRouter);
app.set('view engine', 'ejs');
//routes
app.get("/buscar",(req,res) => {
 res.render("index.ejs");
});

//connection de mongodb
mongoose.connect("mongodb+srv://adramirez:axel__15@cluster0.ncj4zui.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("connection con mongonDB exitosa"))
.catch((error) => console.log(error));

app.listen(port,() => console.log("el sever esta escuchando",port));