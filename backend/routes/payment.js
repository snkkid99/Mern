const express = require("express");
const { getPayment, postPayment } = require("../controllers/paymentController");

const router = express.Router();

// GET all payment
router.get("/", getPayment);

// POST a new payment
router.post("/", postPayment);

module.exports = router;
