const path = require("path");
const env = process.env.ENV || "LOCAL";

const envFiles = {
  LOCAL: ".env.local",
  PROD: ".env.prod",
};

module.exports = {
  env: path.resolve(__dirname, "../env", envFiles[env]),
  entry: path.resolve(__dirname, "../src", "index.tsx"),
  template: path.resolve(__dirname, "../src", "index.html"),
  output: path.resolve(__dirname, "../build"),
};
