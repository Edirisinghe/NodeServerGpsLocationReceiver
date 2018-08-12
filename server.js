var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port);
app.post('/postdata', (req, res) => {
	var data = req.body.data; // your data
	console.log(data);    
	res.status(200).json({
		message: "JSON Data received successfully"
	});
});

console.log('todo list RESTful API server started on: ' + port);