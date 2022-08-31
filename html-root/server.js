var express = require('express');
var nodemailer = require('nodemailer');
var app = express();

app.use(express.json());
app.use('/public', express.static('public'));

app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));

console.log(process.cwd());

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
	console.log(req.url.pathname);
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.listen(8080);
