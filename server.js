var myData = require('./server-assets/myData.js');

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
next()
});


app.get('/friends', function(req, res) {
	var data = myData.getFriends();
	res.send(data);
});

app.post('/friends/new', function(req, res) {
	res.send(myData.addFriend({name: req.body.name, age: req.body.age, yearMet: req.body.yearMet}))

});

app.get('/family', function(req, res) {
	var data = myData.getFamily();
	res.send(data);
});

app.post('/family/new', function(req, res) {
	res.send(myData.addFamilyMember({name: req.body.name, age: req.body.age, relationship: req.body.relationship}))
});

app.get('/activities', function(req, res) {
	var data = myData.getActivities();
	res.send(data);
});

app.post('/activities/new', function(req, res) {
	res.send(myData.addActivity({name: req.body.name}))
});

app.get('/me', function(req, res) {
	var data = myData.getPersonal();
	res.send(data);
});



app.listen(3000);