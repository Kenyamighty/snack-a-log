// CONFIGURATIONS
const express = require("express")
const snacks = express.Router()

// IMPORT QUERIES
const {getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack} = require("../queries/snacks.js")
const { checkName } = require("../validations/checksnacks.js")
const confirmHealth = require("../confirmHealth")


// ROUTES
// ALL SNACKS
snacks.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks()
    if (allSnacks[0]) {
        res.status(200).json({payload: allSnacks, success: true})
    } else {
        res.status(500).json({ error: "server error"})
    }
})

// ONE SNACK
snacks.get("/:id", async (req, res) => {
    const  { id } = req.params;
    const snack = await getSnack(id)
    if (snack) {
        res.json({payload: snack, success: true})
    } else {
        res.status(404).json({ payload: "snack not found", success: false})
    }
})

// CREATE A SNACK
snacks.post("/", checkName, async (req, res) => {
    let { name, fiber, protein, added_sugar, image } = req.body
    try {
     isHealthy = confirmHealth(req.body)
        const snack = await createSnack(
          name, 
          fiber, 
          protein, 
          added_sugar, 
          isHealthy, 
          image  
        )
        res.json({payload: snack, success: true})
    } catch (error) {
        res.status(400).json({error: error})
    }
})

// DELETE A SNACK 
snacks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id)
    if (deletedSnack.id) {
        res.status(200).json({payload: deleteSnack, success: true})
    } else {
        res.status(400).json({payload: "Snack not Found Please", success: false})
    }
})

// UPDATE A SNACK
snacks.put("/:id", checkName, async (req, res) => {
    const { id } = req.params;
    let { name, fiber, protein, added_sugar, isHealthy } = req.body 
    isHealthy = confirmHealth(req.body)
    const updatedSnack = await updateSnack(id, name, fiber, protein, added_sugar, isHealthy, image)
    if (updatedSnack.id) {
        res.status(200).json({payload: updateSnack, success: true})
    } else {
        res.status(404).json({ payload: "Your Snack was not updated...Want to do it again", success: false})
    }
})

module.exports = snacks;