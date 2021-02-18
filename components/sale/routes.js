const express = require("express");
const router = express.Router();
const { createSale, getSaleById, updateSaleById, deleteSaleById } = require("./actions");

// GET by ID
router.get("/:id", getSaleById);

// POST Create a Sale
router.post("/", createSale);

// PUT Update a Sale's info
router.put("/:id", updateSaleById);

// DELETE by ID
router.delete("/:id", deleteSaleById);

module.exports = router;
