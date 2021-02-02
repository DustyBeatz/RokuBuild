const express = require('express');
const path = require('path');

const messenger = require('socket.io')();

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 5050;

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "views/index.html")); //localhost:3000/index.html
});
app.get("/home", (req, res) => {
	res.sendFile(path.join(__dirname, "views/home.html")); 
});

app.listen(port, () => {
console.log(`app is running on ${port}`);

});
