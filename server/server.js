const express = require("express");
const app = express();

app.use(express.json());

app.get("/user", (req, res) => {
  res.send("This is working");
});

app.post("/user", (req, res) => {
  res.send("I got the data bro");
  console.log(req.body);
});

const port = 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
