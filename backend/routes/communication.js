const express = require("express");
const {
  getCommunication,
  postCommunication,
} = require("../controllers/communicationController");

const router = express.Router();

// GET all payment
router.get("/", getCommunication);

// POST a new payment
router.post("/", postCommunication);

module.exports = router;
