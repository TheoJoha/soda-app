//--------------------------------
// import dependencies
//--------------------------------
const express = require("express")
const Soda = require("../models/soda.js")



//--------------------------------
// create router object
//--------------------------------
const router = express.Router()


//--------------------------------
// register routes with router
//--------------------------------
// INDEX GET /soda -> a list of sodas
router.get("/", (req, res) => {
    res.render("soda/index.ejs", {
        sodas: Soda.getAll()
    })
})

// new route GET /soda/new -> page with a create form
router.get("/new", (req, res) => {
    res.render("soda/new.ejs")
})

// create route POST -> create a new soda, redirect back to index
router.post("/", (req, res) => {
    req.body.readyToSell = req.body.readyToSell ? true : false
    Soda.createSoda(req.body)
    res.redirect("/soda")
})

// show route /soda/:id -> 
router.get("/:id", (req, res) => {
    res.render("soda/index.ejs", {
        soda: Soda.getOne(req.params.id),
        index: req.params.id
    })
})

//--------------------------------
// export router
//--------------------------------

module.exports = router









