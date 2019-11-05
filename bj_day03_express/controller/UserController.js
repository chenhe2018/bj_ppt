let BookModel=require('../model/BookModel').BookModel
function findAllBooks(callback) {
    BookModel.find({},function (err,books) {
      callback(books)
    })
}
function addBook(book,callback){
    BookModel.create(book,function (err,newBook) {
        callback(newBook)
    })
}

function deletBook(id,callback){
    BookModel.deleteOne({_id:id},function (err,msg) {
        if(!err) callback({})
    })
}

function updateBook(id,book,callback){
    BookModel.findByIdAndUpdate(id,book,function (err,old) {
        if(!err){
            BookModel.findOne({_id:id},function (err,newBook) {
                if(!err) callback(newBook)
            })
        }
    })
}

exports.findAllBooks=findAllBooks
exports.addBook=addBook
exports.deletBook=deletBook
exports.updateBook=updateBook