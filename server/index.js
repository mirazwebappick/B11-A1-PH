const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Gardening-Community-Application");
});

app.listen(port, () => {
  console.log(`Server running on this port ${port} Port`);
});
