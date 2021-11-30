const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/index"));

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

const server = app.listen(5000, () => {
  const port = server.address().port;
  console.log("Listening at port %s", port);
});

module.exports = server;
