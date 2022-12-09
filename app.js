const express = require("express");

const app = express();

app.use(express.static("public"));

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
   })

app.get('/music', (req,res) => {
    res.sendFile(__dirname + "/views/music.html");
})

app.get('/yoga', (req,res) => {
    res.sendFile(__dirname + "/views/yoga.html");
})

app.get('/gallery', (req,res) => {
    res.sendFile(__dirname + "/views/gallery.html");
})


app.listen(3000)



const navbar = document.getElementsByClassName('topnav')

console.log(navbar)