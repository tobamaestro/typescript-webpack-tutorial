// Read by Node system so we use the Node export system
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/, //  $ - files that end with this pattern
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // to properly resolve .ts on import
  },
  output: {
    publicPath: "public", //  allows dev-server to live reload (no  build required)
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"), //  __dirname - current file location
  },
};
