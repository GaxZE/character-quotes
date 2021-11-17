const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/index"));

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen("5000");
