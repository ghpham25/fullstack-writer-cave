const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// "/" means whenever accessing the main page?
app.get("/api/writing-prompt", (req, res) => {
  const prompt = "This is a prompt fetched from backend";
  res.json({ prompt });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
