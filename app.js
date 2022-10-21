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

app.listen(port, "localhost", () => {
  console.log(`Node app listening at http://localhost:${port}`);
});
