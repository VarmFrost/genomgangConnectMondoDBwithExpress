import mongoose from "mongoose"

let connectToMongoDB = () => 
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

export default connectToMongoDB