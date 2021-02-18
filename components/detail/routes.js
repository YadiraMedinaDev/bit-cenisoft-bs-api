const express = require("express");
const router = express.Router();
const { createDetail, getDetailById, updateDetailById, deleteDetailById } = require("./actions");

// GET by ID
router.get("/:id", getDetailById);

// POST Create a Detail
router.post("/", createDetail);

// PUT Update a Detail's info
router.put("/:id", updateDetailById);

// DELETE by ID
router.delete("/:id", deleteDetailById);

module.exports = router;
