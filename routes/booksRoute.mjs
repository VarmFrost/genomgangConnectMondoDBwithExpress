import oExpress from "express"
import booksModel from "../models/booksModel.mjs"

let router = oExpress.Router()

//router.get("/api/books", async (_request, _response) => 
router.get("/", async (_request, _response) => 
{
    try
    {
        let books = await booksModel.find()
        _response.status(200).json(books)
    }
    catch(_error)
    {
        _response.status(500).send(_error)
    }
})

//router.get("/api/books/:id", async (_request, _response) => 
router.get("/:id", async (_request, _response) => 
{
    try
    {
        let id = _request.params.id 
        let book = await booksModel.findById(id)

        if(!book)
        {
            return _response.status(404).send(`404: Book not found with id: ${id}`)
        }

        _response.status(200).json(book)
    }
    catch(_error)
    {
        _response.status(500).send(_error)
    }
})

//router.post("/api/books", async (_request, _response) => 
router.post("/", async (_request, _response) => 
{
    try
    {
        let addNewBook = await booksModel.create(_request.body)

        _response.status(201).json(addNewBook)
    }
    catch(_error)
    {
        _response.status(500).send(_error)
    }
})

//router.put("/api/books/:id", async (_request, _response) => 
router.put("/:id", async (_request, _response) => 
{
    try
    {
        let id = _request.params.id 
        let book = await booksModel.findById(id)

        if(!book)
        {
            return _response.status(404).send(`404: Book not found with id: ${id}`)
        }

        book.title = _request.body.title
        book.author = _request.body.author 
        book.publishedDate = _request.body.publishedDate

        let updateBook = await book.save()

        _response.status(200).json(updateBook)
    }
    catch(_error)
    {
        _response.status(500).send(_error)
    }
})

//router.patch("/api/books/:id", async (_request, _response) => 
router.patch("/:id", async (_request, _response) => 
{
    try
    {
        let id = _request.params.id 
        let book = await booksModel.findByIdAndUpdate(id, _request.body)

        if(!book)
        {
            return _response.status(404).send(`404: Book not found with id: ${id}`)
        }

        let updateBook = await booksModel.findById(id)

        _response.status(200).json(updateBook)
    }
    catch(_error)
    {
        _response.status(500).send(_error)
    }
})

//router.delete("/api/books/:id", async (_request, _response) => 
router.delete("/:id", async (_request, _response) => 
{
    try
    {
        let id = _request.params.id
        //let book = await booksModel.findById(id)
        let book = await booksModel.findByIdAndDelete(id)

        if(!book)
        {
            return _response.status(404).send(`404: Book not found with id: ${id}`)
        }

        //await book.remove()

        _response.status(204).send(`Book with id: ${id}. Deleted successfully...`)
    }
    catch(_error)
    {
        _response.status(500).send(_error)
    }
})

export default router