const http = require("http");
const { parse } = require("path");
const url = require("url");

/* Accepted Urls examples:
    http://localhost:3000/calculator/add?x=2&&y=3
    http://localhost:3000/calculator/mult?x=2&&y=3
    http://localhost:3000/calculator/sub?x=2&&y=3
    http://localhost:3000/calculator/div?x=2&&y=3  
*/

const server = http
  .createServer((req, res) => {
    const path = url.parse(req.url, true);

    if (!("x" in path.query) || !("y" in path.query)) {
      responseHandler(
        res,
        400,
        "Please make sure you have both x and y parameters in the query string"
      );
    } else {
      let x = parseFloat(path.query["x"]);
      let y = parseFloat(path.query["y"]);

      if (isNaN(x) || isNaN(y)) {
        responseHandler(res, 400, "Please make sure that x & y are numbers");
      } else if (path.pathname == "/calculator/add") {
        let result = x + y;
        responseHandler(res, 200, `${x}+${y} = ${result}`);
      } else if (path.pathname == "/calculator/sub") {
        let result = x - y;
        responseHandler(res, 200, `${x}-${y} = ${result}`);
      } else if (path.pathname == "/calculator/mult") {
        let result = x * y;
        responseHandler(res, 200, `${x}*${y} = ${result}`);
      } else if (path.pathname == "/calculator/div") {
        let result = x / y;
        responseHandler(res, 200, `${x}/${y} = ${result}`);
      }
    }
  })
  .listen(3000);

function responseHandler(res, code, msg) {
  res.writeHead(code, { "Content-Type": "text/plain" });
  res.write(msg);
  res.end();
}
