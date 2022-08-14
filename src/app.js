const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

//for public static path
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

//path for view directory
const viewPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs")
app.set("views", viewPath)

//register the hbs
const partialPath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialPath)

//routing
app.get("/", (req,res) => {
    res.render("index")
});

app.get("/about", (req,res) => {
    res.render("about")
});

app.get("/weather", (req,res) => {
    res.render("Weather")
});

app.get("*", (req,res) => {
    res.render("404",{
        errorMessage : "OOPS!! Page Couldn't Be Found"
    })
});

app.listen(port, () => {
    console.log(`listening the port at ${port}`);
});