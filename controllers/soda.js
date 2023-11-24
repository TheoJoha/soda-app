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


//--------------------------------
// export router
//--------------------------------

module.exports = router









