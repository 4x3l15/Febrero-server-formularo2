const express = require("express");
const userSchema = require("../models/user.js");

const Router = express.Router();

Router.post('/users', (req,res) => {
  const User = new userSchema(req.body);
  User.save()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error.message }))
});

Router.get('/users', (req,res) => {
  userSchema.find()
  .then((data) => console.log(data))
  .catch((error) => res.json({ message: error.message }))
});

Router.get('/users/:id', (req,res) => {
  const { id } = req.params;
  userSchema.findById( { _id: id } )
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error.message }))
});

Router.put('/users/:id', (req,res) => {
  const { id } = req.params;
  const { autor, titulo, año, paginas } = req.body;
  userSchema.updateOne( { _id: id }, { $set: { autor, titulo, año, paginas } } )
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error.message }))
});

Router.delete('/users/:id', (req,res) => {
  const { id } = req.params;
  userSchema.deleteOne( { _id: id } )
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error.message }))
});

module.exports = Router;