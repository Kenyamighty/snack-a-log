// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// CONTROLLERS 
const snacksController = require("./controllers/snackController.js")

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use("/snacks", snacksController)

// ROUTES
// THE WELCOME ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to KENYAD snack bar!!!")
});

// THE CATCH ALL 404 ROUTE
app.get("*", (req, res) => {
    res.status(404).send("page not found, now go get a snack")
})

// EXPORT
module.exports = app;
