const express = require("express");
const { getToken, postToken } = require("../controllers/tokenController");

const router = express.Router();

// GET all payment
router.get("/", getToken);

// POST a new payment
router.post("/", postToken);

module.exports = router;
