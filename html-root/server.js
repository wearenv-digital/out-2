var express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
var app = express();

app.use(express.json());

app.use('/public', express.static('public'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));

// app.get('/', (req, res) => {
// 	res.sendFile(__dirname + '/index.html');
// 	console.log(req.url.pathname);
// });

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

app.post('/', (req, res) => {
	const transporter = nodemailer.createTransport({
		service: 'smtp.ionos.co.uk',
		host: 'smtp.ionos.co.uk',
		port: 587,
		secure: false,
		auth: {
			user: 'info@outsourcedcreditcontrol.co.uk',
			pass: 'Fred1106!',
		},
	});
	const mailOptions = {
		from: req.body.email,
		to: 'info@outsourcedcreditcontrol.co.uk',
		subject: `Message from ${req.body.email} about ${req.body.service}`,
		text: `Message from: ${req.body.name}
		Email: ${req.body.email}.
		Tel no: ${req.body.telephone}.
		Servive required: ${req.body.service}. 
		Message: ${req.body.message}.
		Consent: ${req.body.consent}`,
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			var err = new Error();
			console.log(err);
			// console.log(err.stack);
			res.send('error');
		} else {
			console.log('Email sent' + info.res);
			res.send('Success');
		}
	});
});

app.listen(8080);
