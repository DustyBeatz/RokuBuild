const express = require('express');
const path = require('path');

const messenger = require('socket.io')();

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 5050;

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "views/index.hbs")); //localhost:3000/index.html
});
app.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "views/login.hbs")); 
});
app.get("/settings", (req, res) => {
	res.sendFile(path.join(__dirname, "views/settings.hbs")); 
});
app.get("/kids", (req, res) => {
	res.sendFile(path.join(__dirname, "views/kids.hbs")); 
});

app.listen(port, () => {
console.log(`app is running on ${port}`);

});
