const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");



const app = express();
const port = 3000;
const todoTask = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.render("index.ejs", {todoTask});
});

app.post("/add", (req, res) =>{
    const newTask = req.body.task;
    if (newTask) {
        todoTask.push(newTask);
    }
    res.redirect("/");
});

app.listen(port, () => {
    console.log("server running on port 3000")
})
