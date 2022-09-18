import express  from 'express';
import dotenv from 'dotenv';
import connDB from './db.js';
import pageRoute from './routes/pageRoute.js'

dotenv.config();

// connetction to the db

connDB();

const app = express()
const port = process.env.PORT;

//ejs template engine
app.set("view engine", "ejs")

//static file middleware
app.use(express.static('public'))

app.use("/", pageRoute);

app.listen(port, ()=> {
    console.log(`app running" ${port}`);
})