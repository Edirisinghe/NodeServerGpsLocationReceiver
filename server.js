var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
	var fs = require("fs");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port);
app.post('/postdata', (req, res) => {
	var data = req.body.data; // your data
	console.log(data);
	console.log(generateUserId());
	
	res.status(200).json({
		message: "JSON Data received successfully"
	});
});

app.get('/generateUserId', function (req, res) {
	//fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
			console.log( generateUserId() );
			res.end( generateUserId() );
	
})

function generateUserId(){
	var user ={};
	user.key = Math.floor(Math.random() * Math.floor(1000000));
	return JSON.stringify(user);
}
console.log('todo list RESTful API server started on: ' + port);