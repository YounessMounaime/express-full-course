const express = require('express')
const app = express()
const port = 3001

//connexion avec BD(NosSql)
const mongoose = require('mongoose');





app.get('/', (req, res) => {
  res.sendFile("./views/home.html",{root:__dirname})
})


app.get('/test', (req, res) => {
  res.sendFile("./views/test.html",{root:__dirname})
})



// app.listen(port, () => {
//   console.log(`http://localhost:3001/`)
// })



mongoose.connect("mongodb+srv://youness:btRJ0YsDIuZRWHDM@cluster0.fcpo2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
 })
 .catch((err) => {
   console.log(err);
 });