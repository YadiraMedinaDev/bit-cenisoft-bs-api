const express = require("express");
const router = express.Router();
const { createBook, getBookById, updateBookById, deleteBookById } = require("./actions");

// GET by ID
router.get("/:id", getBookById);

// POST Create a Book
router.post("/", createBook);

// PUT Update a Book's info
router.put("/:id", updateBookById);

// DELETE by ID
router.delete("/:id", deleteBookById);

module.exports = router;
