var mongoose = require('mongoose');

var BookDataSchema = mongoose.Schema({
    "name" : String,
    "date" : String,
    "genre" : String,
    "price" : String,
    "rating" : String,
    "nr_of_votes" : String,
    "photo_src" : String,
    "author" : String,
    "desc" : String
}, {
    collection: 'Books'
});

module.exports = mongoose.model('Books', BookDataSchema);