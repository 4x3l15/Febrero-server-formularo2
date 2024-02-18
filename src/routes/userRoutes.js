const express = require("express");
const User = require("../models/user.js"); // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Crear un nuevo usuario
router.post('/users', (req, res) => {
  const user = new User(req.body);
  user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

// Obtener usuarios
router.get('/users', (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

// Obtener un usuario
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

// Actualizar un usuario
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, gmail } = req.body;

  User.updateOne({ _id: id }, { $set: { name, age, gmail }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

// Borrar un usuario
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  User.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

module.exports = router;
