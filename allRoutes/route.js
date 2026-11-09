const express=require('express')
const bookController=require('../controller/bookController')

const route=new express.Router

//Add Books
route.post('/add-book',bookController.addBookController)

//Get A Book
route.get('/get-book/:id',bookController.singleBookController)

//Get All Books
route.get('/get-all-books',bookController.allBookController)

//Update
route.put('/update-book/:id',bookController.EditBookController)

//Delete
route.delete('/delete-book/:id',bookController.deleteBookController)


module.exports=route
