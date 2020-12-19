const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
const calculatorRouter = require("./calculator");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", calculatorRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
