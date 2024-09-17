const express = require("express");

const app = express();
app.use("/test", (req, res) => {
  res.send("Hi from test route");
});

app.use("/hello", (req, res) => {
  res.send("Hello world");
});

app.use("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(3000, () => {
  console.log("server started on port 3000...");
});
