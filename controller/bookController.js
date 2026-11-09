const books=require('../model/bookModel')


//Add Book
exports.addBookController=async(req,res)=>{
    console.log("Inside addBook");
    const {title,author,bookID,year,genre}=req.body
    const isExisting=await books.findOne({bookID})
    console.log(isExisting);
    if(isExisting){
        res.status(409).json({message:"Book Already Exist",data:{}})
    }else{
        const newBook=await books.create({title,author,bookID,year,genre})
        res.status(201).json({message:"Book Added successfully",data:newBook})
    }
}

//SingleBook
exports.singleBookController=async(req,res)=>{
    console.log("Inside singleBookController");
    const {id}=req.params
    const thisBook=await books.findOne({_id:id})
    res.status(200).json({message:"Book Found",data:thisBook})
}

//Get all Books
exports.allBookController=async(req,res)=>{
    console.log("Inside allBookController");
    const allBooks=await books.find()
    res.status(200).json({message:"Books found",data:allBooks})
}

//Edit Book
exports.EditBookController=async(req,res)=>{
    console.log("Inside EditBookController");
    const {title,author,bookID,year,genre}=req.body
    const{id}=req.params
    console.log(id);
    const book=await books.findByIdAndUpdate({_id:id},{title,author,bookID,year,genre},{new:true})
    res.status(200).json({message:"Book Update Successfully",data:book})
}


//Delete Book
exports.deleteBookController=async(req,res)=>{
    console.log("Inside deleteBookController");
    const{id}=req.params
    const deletedBook=await books.findByIdAndDelete({_id:id})
    res.status(200).json({message:"Book Deleted Successfully",data:deletedBook})
}