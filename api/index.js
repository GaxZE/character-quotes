const express = require("express");
const app = express();
const port = 5000;

const quotes = require("./quotes");

app.get("/", (req, res) => {
  return res.send(quotes);
});

app.listen(port, () => console.log(`App listening on port: ${port}`));
