//--------------------------------
// import dependencies
//--------------------------------
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const SodaRouter = require("./controllers/soda")
// const methodOverride = require("method-override")


//--------------------------------
// global variables
//--------------------------------
const PORT = process.env.PORT || 3000

//--------------------------------
// create application object
//--------------------------------
const app = express()

//--------------------------------
// middleware
//--------------------------------
app.use(morgan("tiny"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true})) // parse html form data -> req.body
app.use("/soda", SodaRouter)


//--------------------------------
// routes
//--------------------------------
app.get("/", (req, res) => {
    res.send("Server is working")
})

//--------------------------------
// create server listener
//--------------------------------
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})