var express = require('express');
var router = express.Router();
var userController=require('../controller/UserController')

/* GET users listing. */
router.get('/', function(req, res,next) {
      userController.findAllBooks(function (books) {
          res.json(books)
      })
    }
  );
router.post('/',function (req,res) {
    let book=req.body;
    userController.addBook(book,function (newBook) {
      res.json(newBook)
    })
})
router.delete('/:id',function (req,res) {
    userController.deletBook(req.params.id,function (em) {
        res.json(em)
    })
})

router.put('/:id',function (req,res) {
    userController.updateBook(req.params.id,req.body,function (newbook) {
        res.json(newbook)
    })
})



module.exports = router;
