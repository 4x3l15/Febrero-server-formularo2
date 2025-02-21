const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js");
const app = express();

const port = 9500;

app.set('view engine', 'ejs');

app.use(express.json());
app.use('/api', userRouter);

mongoose.connect('mongodb+srv://adramirez:Ar12345@cluster0.aef5d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then((data) => console.log("Conexión con MongoDB exitosa"))
  .catch((error) => console.log(error));

app.listen(port, () => 
  console.log("El servidor está escuchando en el puerto", port)
  );
