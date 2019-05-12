var express = require('express');
var router = express.Router();
const Books = require('../models/books');
const Authors = require('../models/authors');
const fileUpload = require('express-fileupload');

/* GET home page. */
router.get('/allbooks', (req, res, next) => {
  Books.find()
  .exec()
  .then( booksData => {
    return res.status(200).json(booksData);
  })
  
});

router.post('/upload',  (req, res) => {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let file = req.files.file;
  
  file.mv(`./public/uploads/${file.name}`, (err) =>{
    if (err){
      console.log(err)
      return res.status(500).send(err);
    }
  })
  console.log(req.body)
  var book = new Books({
    author: req.body.author,
     date: req.body.date,
     desc: req.body.description,
     name: req.body.title,
     genre: req.body.genre,
     price: req.body.price,
     nrOfVotes: 0,
     rating: 0,
     photo_src: `./public/uploads/${file.name}`
  })
  book.save((err, data) => {
    res.send('Data saved!')
  });
});

//get all restaurants data for the specified city with or without filters
router.post('/singleBookData', (req, res, next) => {
  var reqId = req.body.id;
  console.log(reqId)
  Books.findOne({_id: reqId})
    .exec()
    .then(bookData => {  
      return res.status(200).json(bookData);
     
    })
    .catch( err => console.log(err));
})

module.exports = router;
