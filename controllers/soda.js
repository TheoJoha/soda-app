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

// EDIT router GET /soda/:id/edit
router.get("/:id/edit", (req, res) => {
    res.render("soda/edit.ejs", {
        soda: Soda.getOne(req.params.id),
        index: req.params.id
    })
})

// UPDATE route Put /soda/:id -> create form to update soda
router.put("/:id", (req, res) => {
    req.body.readyToSell = req.body.readyToSell ? true : false
    Soda.update(req.params.id, req.body)
    res.redirect("/soda")
})

// destroy route Delete /soda/:id -> deletes a soda
router.delete("/:id", (req, res) => {
    Soda.destroy(req.params.id)
    res.redirect("/soda")
})

// show route /soda/:id -> 
router.get("/:id", (req, res) => {
    res.render("soda/show.ejs", {
        soda: Soda.getOne(req.params.id),
        index: req.params.id
    })
})

//--------------------------------
// export router
//--------------------------------

module.exports = router









