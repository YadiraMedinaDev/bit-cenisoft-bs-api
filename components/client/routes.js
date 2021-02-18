const express = require("express");
const router = express.Router();
const { createClient, getClientById, updateClientById, deleteClientById } = require("./actions");

// GET by ID
router.get("/:id", getClientById);

// POST Create a Client
router.post("/", createClient);

// PUT Update a Client's info
router.put("/:id", updateClientById);

// DELETE by ID
router.delete("/:id", deleteClientById);

module.exports = router;
