require("dotenv").config();

const express = require("express");
const paymentRoutes = require("./routes/payment");
const tokenRoutes = require("./routes/token");
const communicationRoutes = require("./routes/communication");
const todoRoutes = require("./routes/todo");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());

const logResponseBody = (req, res, next) => {
  const oldWrite = res.write;
  const oldEnd = res.end;

  const chunks = [];

  res.write = (chunk, ...args) => {
    chunks.push(chunk);
    return oldWrite.apply(res, [chunk, ...args]);
  };

  res.end = (chunk, ...args) => {
    if (chunk) {
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString("utf8");
    console.log(req.originalUrl, req.body, body);
    return oldEnd.apply(res, [chunk, ...args]);
  };

  next();
};

app.use(logResponseBody);

app.get("/", (req, res) => {
  res.status(200).json({ mssg: "Hello" });
});
app.use("/json/apipm/payment", paymentRoutes);
app.use("/json/apipm/token", tokenRoutes);
app.use("/Communication/Create", communicationRoutes);
app.use("/api/todos", todoRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
