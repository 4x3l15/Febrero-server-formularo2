const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/userRoutes.js");
const port = 9500;

//routers
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', userRouter);

// Conexión a MongoDB
mongoose.connect("mongodb+srv://adramirez:axel__15@cluster0.ncj4zui.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Conexión con MongoDB exitosa"))
  .catch((error) => console.log(error));

  // verificacion desde la terminal
app.listen(port, () => console.log("El servidor está escuchando en el puerto", port));
