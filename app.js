import express  from 'express';

const app = express()
const port = 3000;

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
app.get("/blog", (req, res) =>{
    res.render("blog");
})
app.get("/contact", (req, res) =>{
    res.render("contact");
})
app.get("/projects", (req, res) =>{
    res.render("projects");
})
app.get("/services", (req, res) =>{
    res.render("services");
})
app.get("/gallery", (req, res) =>{
    res.render("gallery");
})


app.listen(port, ()=> {
    console.log(`app running" ${port}`);
})