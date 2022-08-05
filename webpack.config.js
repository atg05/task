const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./build",
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".tsx", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /(\.css | \.scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
  ],
};
