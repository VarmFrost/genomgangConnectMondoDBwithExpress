import oExpress from "express"
//import mongoose from "mongoose"
import connectToMongoDB from "./database/connectToMongoDB.mjs"
//import booksModel from "./models/booksModel.mjs"
import booksRoute from "./routes/booksRoute.mjs"

let app = oExpress() 

const PORT = 4011

//version 1
//mongoose.connect("mongodb://127.0.0.1:27017/booksDB2")

//version 2 //one-liner 
/*mongoose.connect("mongodb://127.0.0.1:27017/booksDB2")
    .then( () => console.log(`Database: MongoDB is connected...`))
    .catch( (_error) => console.error(_error) ) */

//version 2 unfolded
/*mongoose.connect("mongodb://127.0.0.1:27017/booksDB2")
    .then( () => 
    {
        return console.log(`Database: MongoDB is connected...`)
    })
    .catch( (_error) => 
    {
        console.error(_error) 
    }) */
    
//version 3 //try and catch 
/*try 
{
    mongoose.connect("mongodb://127.0.0.1:27017/booksDB2")
    console.log(`Database: MongoDB is connected...`)
}
catch(_error)
{
    console.error(_error) 
}*/

//as a function 
/*let connectToMongoDB = () => 
{
    try 
    {
        mongoose.connect("mongodb://127.0.0.1:27017/booksDB2")
        console.log(`Database: MongoDB is connected...`)
    }
    catch(_error)
    {
        console.error(_error) 
    }
}

connectToMongoDB()
*/

//som en fil 
connectToMongoDB()

/*const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
    }
})

const booksModel = mongoose.model("books", bookSchema)*/
//as a file 

app.use(oExpress.json()) //so the _request.body get defined 

/*
app.get("/api/books", async (_request, _response) => 
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

app.get("/api/books/:id", async (_request, _response) => 
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

app.post("/api/books", async (_request, _response) => 
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

app.put("/api/books/:id", async (_request, _response) => 
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

app.patch("/api/books/:id", async (_request, _response) => 
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

app.delete("/api/books/:id", async (_request, _response) => 
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
*/
//app.use("/", booksRoute)
app.use("/api/books", booksRoute)

app.listen(PORT, () => 
{
    console.log(`Server is running on port: ${PORT}. http://localhost:${PORT}`)
})