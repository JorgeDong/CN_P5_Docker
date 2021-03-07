const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  	res.send('Saludos desde express');
});

app.post('/suma', function (req, res) {
	let nums = req.body.nums;
	let acum = 0;
	nums.forEach(element =>{
		acum+=element;
	});

	acum = JSON.stringify(acum);  	
  	res.send(acum);
  	res.sendStatus(200)
});

app.post('/resta', function (req, res) {
	let total = req.body.numToSubs;
	let nums = req.body.nums;
	nums.forEach(element =>{
		total-=element;
	});

	total = JSON.stringify(total);  	
  	res.send(total);
  	res.sendStatus(200)
});

app.post('/multiplica', function (req, res) {
	let nums = req.body.nums;
	let acum = 1;
	nums.forEach(element =>{
		acum*=element;
	});

	acum = JSON.stringify(acum);  	
  	res.send(acum);
  	res.sendStatus(200)
});




app.listen(3000, () => {
 	console.log("El servidor está inicializado en el puerto 3000");
});