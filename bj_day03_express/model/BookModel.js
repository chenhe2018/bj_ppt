const mongoose=require('mongoose')

let BookSchema={
    name:String,price:Number,count:Number
}
let BookModel=mongoose.model("Book",BookSchema)
exports.BookModel=BookModel