var mongoose = require('mongoose');

var AuthorDataSchema = mongoose.Schema({
    "name" : String,
    "age" : String,
    "birthday" : String,
    "biography" : String,
    "rating" : String
}, {
    collection: 'Authors'
});

module.exports = mongoose.model('Authors', AuthorDataSchema);