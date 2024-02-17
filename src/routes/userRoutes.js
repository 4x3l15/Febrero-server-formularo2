const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/users', (req, res) => {
  // Crear una nueva instancia de usuario utilizando el modelo User
  const user = new userSchema(req.body); // Debes usar el modelo User, no userSchema
  // Guardar el usuario en la base de datos
  user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

// Obtener usuarios
router.get('/users', (req, res) => {
  userSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

module.exports = router;

