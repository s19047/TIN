// webpack.config.js
const path = require("path");

module.exports = {
  entry: ["./src/app.js", "./src/index.css"],
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
