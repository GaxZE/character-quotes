const express = require("express");
const app = express();
const port = 5000;

// @todo: remove static quotes
const quotes = require("./quotes");

app.get("quotes", (req, res) => {
  return res.send(quotes);
});

app.listen(port, () => console.log(`App listening on port: ${port}`));
