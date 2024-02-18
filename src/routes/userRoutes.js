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
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

// Obtener un usuario
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

// Actualizar un usuario
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, gmail } = req.body;

  userSchema
    .updateOne({ _id: id }, { $set: name, age, gmail }, { new: true })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

// Borrar un usuario
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});


module.exports = router;

