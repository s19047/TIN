const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname + "/public/"));
// send the user to index html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
