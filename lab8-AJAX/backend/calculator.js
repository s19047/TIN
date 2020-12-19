const express = require("express");
const calculatorRouter = express.Router();

calculatorRouter.post("/calculate", (req, res) => {
  const { num1, num2, op } = req.body;
  let result = calculate(num1, num2, op);
  res.json(JSON.stringify(result));
});

function calculate(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw Error("Invalid operation");
  }
}

module.exports = calculatorRouter;
