const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "express on vercel: it works!" });
});

app.get("/shoes", async (req, res) => {
  const promises = fs.promises;
  const users = await promises.readFile(__dirname + "/db.json", "utf-8");
  const arr = JSON.parse(users);
  arr.push({
    _id: "my-id",
    name: "Ryanne Ceres",
    gender: "female",
    email: "ry@test.com",
  });
  await promises.writeFile(__dirname + "/db.json", JSON.stringify(arr));

  res.json(arr);
});

app.listen(port, "localhost", () => {
  console.log(`Node app listening at http://localhost:${port}`);
});
