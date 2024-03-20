const { merge } = require("webpack-merge");
const config = require("./webpack.common");
const paths = require("./paths");

module.exports = merge(config, {
  mode: "production",
  output: {
    filename: "[name].js",
    path: paths.output,
    publicPath: "/",
  },
  optimization: {
    minimize: true,
  },
});
