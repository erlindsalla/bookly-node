
const url = 'mongodb://localhost:27017'
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');
// mongoose.connect('mongodb://localhost/smartbar');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', function () {
	console.log('connected to database successfuly...')
})