var express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
var app = express();
require('dotenv').config('/html-root/.env');

const PORT = 8080; // CHANGE TO WHATEVER

app.use(express.json());

app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/public', express.static('public'));

// pathbinding
var oldPath = __dirname + __filename;
prettyPath = oldPath.substring(0, oldPath.lastIndexOf('.')) || oldPath;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/*.html', (req, res) => {
	console.log(req.url);
	res.sendFile(__dirname + req.url);
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
});

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/about.html');
});

app.get('/about.html', (req, res) => {
	res.sendFile(__dirname + '/about.html');
});

app.get('/cost-reduction-management-better', (req, res) => {
	res.sendFile(__dirname + '/cost-reduction-management-better.html');
});

app.get('/credit-checking-better', (req, res) => {
	res.sendFile(__dirname + '/credit-checking-better.html');
});

app.get('/credit-control-tips', (req, res) => {
	res.sendFile(__dirname + '/credit-control-tips.html');
});

app.get('/credit-management-health-check', (req, res) => {
	res.sendFile(__dirname + '/credit-management-health-check.html');
});

app.get('/debt-recovery-collection-better', (req, res) => {
	res.sendFile(__dirname + '/debt-recovery-collection-better.html');
});

app.get('/late-payment-calculator', (req, res) => {
	res.sendFile(__dirname + '/late-payment-calculator.html');
});

app.get('/late-payment-better-templates', (req, res) => {
	res.sendFile(__dirname + '/late-payment-better-templates.html');
});

app.get('/letter-before-action-checklist', (req, res) => {
	res.sendFile(__dirname + '/letter-before-action-checklist.html');
});

app.get('/outsourced-credit-control', (req, res) => {
	res.sendFile(__dirname + '/outsourced-credit-control.html');
});

app.get('/privacy-policy', (req, res) => {
	res.sendFile(__dirname + '/privacy-policy.html');
});

app.get('/process-improvement', (req, res) => {
	res.sendFile(__dirname + '/process-improvement.html');
});

app.get('/resources', (req, res) => {
	res.sendFile(__dirname + '/resources.html');
});

app.get('/terms-and-conditions', (req, res) => {
	res.sendFile(__dirname + '/terms-and-conditions.html');
});

app.get('/training-and-consultancy-better', (req, res) => {
	res.sendFile(__dirname + '/training-and-consultancy-better.html');
});

app.get('/sitemap.xml', (req, res) => {
	res.sendFile(__dirname + '/sitemap.xml');
});

app.get('/sitemap', (req, res) => {
	res.sendFile(__dirname + '/sitemap.xml');
});

app.post('/', (req, res) => {
	const transporter = nodemailer.createTransport({
		service: 'smtp.ionos.co.uk',
		host: 'smtp.ionos.co.uk',
		port: 587,
		secure: false,
		auth: {
			user: 'enquiries@outsourcedcreditcontrol.co.uk',
			pass: process.env.EMAIL_PASS
		}
	});
	// var transporter = nodemailer.createTransport({
	// 	host: 'smtp.mailtrap.io',
	// 	port: 2525,
	// 	auth: {
	// 		user: '80ffa6314d8d52',
	// 		pass: 'b8cb03fa74a9e6'
	// 		// pass: 'test'
	// 	}
	// });

	const mailOptions = {
		from: req.body.email,
		to: 'info@outsourcedcreditcontrol.co.uk',
		subject: `Message from ${req.body.email} about ${req.body.service}`,
		text: `Message from: ${req.body.name}
		Email: ${req.body.email}.
		Tel no: ${req.body.telephone}.
		Service required: ${req.body.service}. 
		Message: ${req.body.message}.
		Consent: ${req.body.consent}`
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log('error', error);
			// console.log(err.stack);
			res.sendStatus(400);
		} else {
			console.log('Email sent' + info.res);
			res.sendStatus(200);
		}
		return res.status(200).end();
	});
});

app.listen(PORT, () => {
	console.log(`server running on ports ${PORT}`);
});
