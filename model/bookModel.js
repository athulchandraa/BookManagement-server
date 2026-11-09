const mongoose=require('mongoose')

const booksSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    bookID:{
        type:String,
        required:true,
        unique:true
    },
    year:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
})

const books=mongoose.model("books",booksSchema)

module.exports=books