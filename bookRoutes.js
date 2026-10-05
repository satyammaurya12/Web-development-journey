const express= require("express");
const router = express.Router();
const books = [
    {
        id:1,
        title:"Atomic Habits",
        author:"James Clear"
    },
    {
        id:2,
        title:"The Alchemist",
        author:"Paulo Coelho"
    }
];
router.get("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const book = books.find((book)=> book.id ===id);
    if(!book){
        return 
        res.status(404).json({
            message: "Book not found"
        });
    }
    res.json(book);
});
router.post("/",(req,res)=>{
    const{title,author}=
    req.body;
    if(!title||!author){
        return 
        res.status(400).json({
            message: "Title and author are required"
        });
    }
    const newBook = {
        id: books.length+1,title,author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});
module.exports = router;