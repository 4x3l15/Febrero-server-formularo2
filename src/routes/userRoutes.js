const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/users', (req, res) => {
  // Crear una nueva instancia de usuario utilizando el modelo User
  const user = new User(req.body);
  // Guardar el usuario en la base de datos
  user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

module.exports = router;
