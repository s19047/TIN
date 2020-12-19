const input = document.getElementById("formulaTxt");
const button = document.getElementById("calculate");
const solution = document.getElementById("solution");

button.addEventListener("click", () => {
  const expr = input.value.match(/(\d+)\s?([\+\-\*\/])\s?(\d+)/);
  const first = Number(expr[1]);
  const operator = expr[2];
  const second = Number(expr[3]);

  body = { num1: first, num2: second, op: operator };
  sendRequest(body);
});

const sendRequest = (body) => {
  fetch("http://localhost:3000/calculate", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => (solution.innerText = JSON.parse(data)));
};
