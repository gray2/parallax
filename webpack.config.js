const path = require("path");

module.exports = {
  mode:"development",
  entry: "./src/index.js",
  output:{
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },


  module:{
    rules:[
      { //coooment
        test: /\.scss$/,
        use: [
          "style-loader", // 3. injects css into Document
          "css-loader", // 2. turns css into commonjs
          "sass-loader", // 1. turns sass into css
        ],
      },
    ],
  },

};
