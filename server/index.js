const express = require("express");
const cors = require("cors");
const questions = require("./data/index");
const app = express();
const bodyParser = require("body-parser");

global.globalArray = [];

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

app.use(cors());

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/questions", (_, res) => {
  res.json(questions);
});

app.post("/answers", (req, res) => {
  globalArray = [...req.body.answers];
  res.json({ res: "Success" });
});

app.get("/results", (_, res) => {
  res.json(globalArray);
});
