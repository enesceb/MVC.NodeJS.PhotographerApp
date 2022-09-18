import express  from 'express';
import dotenv from 'dotenv';
import connDB from './db.js';

dotenv.config();

// connetction to the db

connDB();

const app = express()
const port = process.env.PORT;

//ejs template engine
app.set("view engine", "ejs")

//static file middleware
app.use(express.static('public'))

app.get("/", (req, res) =>{
    res.render("index");
})
app.get("/about", (req, res) =>{
    res.render("about");
})



app.listen(port, ()=> {
    console.log(`app running" ${port}`);
})