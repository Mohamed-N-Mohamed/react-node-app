const express = require("express");
const app = express();

app.use(express.json());

app.get("/user", (req, res) => {
  res.send({
    messge: "This is working now",
  });
});

app.post("/user", (req, res) => {
  res.send({
    message: "The data has been received",
  });
  console.log(req.body);
});

const port = 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
