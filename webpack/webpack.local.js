const { merge } = require("webpack-merge");
const config = require("./webpack.common");
const paths = require("./paths");

module.exports = merge(config, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].js",
    path: paths.output,
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
});
