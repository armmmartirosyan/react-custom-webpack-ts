const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");
const webpack = require("webpack");

const dotenv = require("dotenv").config({ path: paths.env });

const LOADERS = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: "babel-loader",
  },
  {
    test: /\.(scss|sass)$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
  {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  },
];

const PLUGINS = [
  new HtmlWebpackPlugin({
    template: paths.template,
  }),

  new webpack.DefinePlugin({
    "process.env": JSON.stringify(dotenv.parsed),
  }),
];

module.exports = {
  entry: paths.entry,
  resolve: {
    alias: {
      // TODO: These are for import aliases
      //   components: path.resolve(__dirname, "src/components"),
      //   constants: path.resolve(__dirname, "src/constants"),
      //   providers: path.resolve(__dirname, "src/providers"),
      //   api: path.resolve(__dirname, "src/services/api"),
      //   services: path.resolve(__dirname, "src/services"),
      //   layouts: path.resolve(__dirname, "src/layouts"),
      //   contexts: path.resolve(__dirname, "src/contexts"),
      //   pages: path.resolve(__dirname, "src/pages"),
      //   hooks: path.resolve(__dirname, "src/hooks"),
      //   utils: path.resolve(__dirname, "src/utils"),
      //   types: path.resolve(__dirname, "src/types"),
      //   store: path.resolve(__dirname, "src/store"),
      //   HOCs: path.resolve(__dirname, "src/HOCs"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: LOADERS,
  },
  plugins: PLUGINS,
};
