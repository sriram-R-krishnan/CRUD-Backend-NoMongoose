const express = require("express")
const app = express()
const items = require("./routes")
const MongoClient = require('mongodb').MongoClient


let dotenv = require("dotenv")
dotenv.config()


// adding middlewares
app.use(express.static('./public'));
app.use(express.json());

// Home Page Routing

app.get("/", (req, res) => {
    res.status(200).send("hello world")
})

// routing
app.use('/' , items)


app.listen(5000 ,async()=>{
    const client = new MongoClient(process.env.mongoDB_URI);
        db = client.db()
        await client.connect()
        console.log("server started");
    
})




