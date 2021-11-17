const express = require("express");
const router = express.Router();
const quotes = require("../models/quotes");

router.get("/", async (req, res) => {
  await quotes
    .getQuotes(req.params.author)
    .then((quotes) => res.json(quotes))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

router.get('/:author', async (req, res) => {
  const author = req.params.author

  await quotes.getQuote(author)
  .then(quote => res.json(quote))
  .catch(err => {
      if (err.status) {
          res.status(err.status).json({ message: err.message })
      } else {
          res.status(500).json({ message: err.message })
      }
  })
})


module.exports = router;
